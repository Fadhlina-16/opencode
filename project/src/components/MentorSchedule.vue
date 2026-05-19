<script setup>
import { ref, computed, onMounted } from 'vue'

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const today = new Date()
const currentMonth = ref(new Date(today.getFullYear(), today.getMonth(), 1))
const selectedDate = ref(null)
const sessions = ref([])
const loading = ref(true)
const error = ref(null)
const activeFilter = ref('All')

const filters = ['All', 'Lecture', 'Quiz', 'Assignment', 'Session']

const filteredSessions = computed(() => {
  if (activeFilter.value === 'All') return sessions.value
  return sessions.value.filter(s => s.type === activeFilter.value.toLowerCase())
})

const monthLabel = computed(() =>
  `${months[currentMonth.value.getMonth()]} ${currentMonth.value.getFullYear()}`
)

const firstDay = computed(() => currentMonth.value.getDay())
const daysInMonth = computed(() =>
  new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth() + 1, 0).getDate()
)
const daysInPrevMonth = computed(() =>
  new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth(), 0).getDate()
)

const sessionsByDate = computed(() => {
  const map = new Map()
  for (const s of filteredSessions.value) {
    const key = formatDate(new Date(s.date))
    if (!map.has(key)) map.set(key, [])
    map.get(key).push(s)
  }
  return map
})

const calendarDays = computed(() => {
  const days = []
  const totalCells = Math.ceil((firstDay.value + daysInMonth.value) / 7) * 7

  for (let i = 0; i < totalCells; i++) {
    let day, isCurrentMonth

    if (i < firstDay.value) {
      day = daysInPrevMonth.value - firstDay.value + i + 1
      isCurrentMonth = false
    } else if (i >= firstDay.value + daysInMonth.value) {
      day = i - firstDay.value - daysInMonth.value + 1
      isCurrentMonth = false
    } else {
      day = i - firstDay.value + 1
      isCurrentMonth = true
    }

    const month = isCurrentMonth
      ? currentMonth.value.getMonth()
      : i < firstDay.value
        ? currentMonth.value.getMonth() - 1
        : currentMonth.value.getMonth() + 1

    const year = month < 0
      ? currentMonth.value.getFullYear() - 1
      : month > 11
        ? currentMonth.value.getFullYear() + 1
        : currentMonth.value.getFullYear()

    const date = new Date(year, month < 0 ? 11 : month > 11 ? 0 : month, day)

    days.push({
      day,
      date,
      isCurrentMonth,
      isToday: isSameDay(date, today),
      hasSession: sessionsByDate.value.has(formatDate(date)),
    })
  }
  return days
})

const selectedSessions = computed(() => {
  if (!selectedDate.value) return null
  const key = formatDate(selectedDate.value)
  return sessionsByDate.value.get(key) || []
})

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate()
}

function formatDate(d) {
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const yyyy = d.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}

function selectDate(date) {
  selectedDate.value = date
}

function prevMonth() {
  currentMonth.value = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth() - 1, 1)
}

function nextMonth() {
  currentMonth.value = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth() + 1, 1)
}

function isSelected(date) {
  return selectedDate.value && isSameDay(date, selectedDate.value)
}

function formatTime(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
}

function goToday() {
  currentMonth.value = new Date(today.getFullYear(), today.getMonth(), 1)
  selectedDate.value = today
}

function retry() {
  error.value = null
  loading.value = true
  fetchSessions()
}

function typeBadgeClass(type) {
  const map = {
    lecture: 'bg-blue-100 text-blue-700',
    quiz: 'bg-amber-100 text-amber-700',
    assignment: 'bg-green-100 text-green-700',
    session: 'bg-purple-100 text-purple-700',
  }
  return map[type] || 'bg-gray-100 text-gray-700'
}

const mockSessions = [
  { id: 1, type: 'lecture', module: 'CS101 - Intro to Programming', student: 'Alice Johnson', date: '2026-05-20T09:00:00', duration: '1h' },
  { id: 2, type: 'quiz', module: 'CS101 - Quiz 3', student: null, date: '2026-05-20T10:00:00', duration: '30min' },
  { id: 3, type: 'lecture', module: 'CS201 - Data Structures', student: 'Carol White', date: '2026-05-22T14:00:00', duration: '1.5h' },
  { id: 4, type: 'assignment', module: 'CS201 - Project Milestone', student: null, date: '2026-05-22T15:30:00', duration: '' },
  { id: 5, type: 'session', module: 'CS301 - Algorithms', student: 'Eve Brown', date: '2026-05-25T11:00:00', duration: '1h' },
  { id: 6, type: 'lecture', module: 'CS301 - Algorithms', student: 'Frank Wilson', date: '2026-05-25T13:00:00', duration: '1h' },
  { id: 7, type: 'quiz', module: 'CS101 - Quiz 4', student: null, date: '2026-05-27T09:00:00', duration: '30min' },
  { id: 8, type: 'lecture', module: 'CS101 - Intro to Programming', student: 'Henry Davis', date: '2026-05-27T10:00:00', duration: '1h' },
  { id: 9, type: 'assignment', module: 'CS201 - Lab Report', student: null, date: '2026-05-29T14:00:00', duration: '' },
  { id: 10, type: 'session', module: 'CS201 - Data Structures', student: 'Jack Taylor', date: '2026-05-29T15:30:00', duration: '1h' },
  { id: 11, type: 'lecture', module: 'CS401 - Software Engineering', student: 'Kate Martinez', date: '2026-06-02T10:00:00', duration: '1h' },
  { id: 12, type: 'quiz', module: 'CS401 - Midterm', student: null, date: '2026-06-02T11:00:00', duration: '1h' },
  { id: 13, type: 'session', module: 'CS301 - Algorithms', student: 'Mia Thomas', date: '2026-06-05T13:00:00', duration: '1h' },
  { id: 14, type: 'assignment', module: 'CS301 - Final Project', student: null, date: '2026-06-05T14:00:00', duration: '' },
  { id: 15, type: 'lecture', module: 'CS101 - Intro to Programming', student: 'Olivia Robinson', date: '2026-06-08T09:00:00', duration: '1h' },
]

function fetchSessions() {
  setTimeout(() => {
    sessions.value = mockSessions
    loading.value = false
    error.value = null
  }, 600)
}

onMounted(() => {
  fetchSessions()
})
</script>

<template>
  <div class="p-6">
    <header class="mb-6">
      <h1 class="text-2xl font-extrabold text-heading lg:text-3xl">My Schedule</h1>
      <p class="mt-1 text-sm text-body">View your upcoming classes, quizzes, and assignments</p>
    </header>

    <div class="mb-5 flex items-center gap-2">
      <button
        v-for="filter in filters"
        :key="filter"
        class="rounded-lg px-4 py-1.5 text-sm font-medium transition"
        :class="activeFilter === filter ? 'bg-accent text-white' : 'bg-card text-body border border-border hover:bg-gray-50'"
        @click="activeFilter = filter"
      >
        {{ filter }}
      </button>
    </div>

    <div v-if="error" class="mb-6 rounded-xl border border-border bg-card p-6 text-center">
      <div class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
        <svg class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      </div>
      <h3 class="text-lg font-semibold text-heading">Unable to load schedule</h3>
      <p class="mt-1 text-sm text-body">Something went wrong. Please try again.</p>
      <button
        type="button"
        class="mt-4 inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover"
        @click="retry"
      >
        Try Again
      </button>
    </div>

    <div v-else-if="loading" class="rounded-xl border border-border bg-card p-6">
      <div class="mb-4 h-8 w-48 animate-pulse rounded bg-gray-200" />
      <div class="mb-6 grid grid-cols-7 gap-1">
        <div v-for="i in 7" :key="i" class="h-4 animate-pulse rounded bg-gray-200" />
      </div>
      <div class="grid grid-cols-7 gap-1">
        <div v-for="i in 35" :key="i" class="aspect-square animate-pulse rounded bg-gray-100" />
      </div>
    </div>

    <div v-else class="grid gap-6 lg:grid-cols-5">
      <div class="rounded-xl border border-border bg-card p-4 lg:col-span-3 lg:p-5">
        <div class="mb-4 flex items-center justify-between">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-lg p-2 text-body transition hover:bg-gray-100"
            @click="prevMonth"
            aria-label="Previous month"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <h2 class="text-lg font-bold text-heading lg:text-xl">{{ monthLabel }}</h2>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-lg p-2 text-body transition hover:bg-gray-100"
            @click="nextMonth"
            aria-label="Next month"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div class="mb-1 flex justify-end">
          <button
            type="button"
            class="text-xs font-medium text-accent transition hover:text-accent-hover"
            @click="goToday"
          >
            Today
          </button>
        </div>

        <div class="grid grid-cols-7 mb-1">
          <div
            v-for="day in weekdays"
            :key="day"
            class="py-1 text-center text-xs font-semibold text-muted"
          >
            {{ day }}
          </div>
        </div>

        <div class="grid grid-cols-7">
          <div
            v-for="(cell, idx) in calendarDays"
            :key="idx"
            class="relative aspect-square cursor-pointer p-1"
            @click="selectDate(cell.date)"
          >
            <div
              class="flex h-full w-full items-center justify-center rounded-lg text-sm transition"
              :class="[
                cell.isToday && !isSelected(cell.date)
                  ? 'border border-accent font-semibold text-accent'
                  : '',
                isSelected(cell.date)
                  ? 'bg-accent font-semibold text-white'
                  : '',
                cell.isCurrentMonth && !isSelected(cell.date)
                  ? 'text-body hover:bg-gray-100'
                  : '',
                !cell.isCurrentMonth && !isSelected(cell.date)
                  ? 'text-muted'
                  : '',
              ]"
            >
              {{ cell.day }}
            </div>
            <div
              v-if="cell.hasSession && cell.isCurrentMonth"
              class="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5"
            >
              <span class="block h-1 w-1 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-xl border border-border bg-card p-4 lg:col-span-2 lg:p-5">
        <template v-if="!selectedDate">
          <div class="flex flex-col items-center justify-center py-12 text-center">
            <svg class="mb-3 h-10 w-10 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <h3 class="text-sm font-semibold text-heading">Select a date</h3>
            <p class="mt-1 text-xs text-muted">Click a date on the calendar to view items</p>
          </div>
        </template>
        <template v-else-if="selectedSessions && selectedSessions.length === 0">
          <div class="flex flex-col items-center justify-center py-12 text-center">
            <svg class="mb-3 h-10 w-10 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-sm font-semibold text-heading">No items</h3>
            <p class="mt-1 text-xs text-muted">
              Nothing on {{ selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) }}
            </p>
          </div>
        </template>
        <template v-else>
          <div class="mb-4">
            <h3 class="text-base font-bold text-heading">
              {{ selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) }}
            </h3>
            <p class="text-xs text-muted">{{ selectedSessions.length }} item{{ selectedSessions.length !== 1 ? 's' : '' }}</p>
          </div>
          <div class="space-y-3">
            <div
              v-for="session in selectedSessions"
              :key="session.id"
              class="rounded-lg border border-border bg-page p-3 transition hover:border-accent/30"
            >
              <div class="flex items-start justify-between gap-2">
                <div class="min-w-0">
                  <div class="mb-1.5">
                    <span
                      class="inline-block rounded-md px-2 py-0.5 text-xs font-medium capitalize"
                      :class="typeBadgeClass(session.type)"
                    >
                      {{ session.type }}
                    </span>
                  </div>
                  <h4 class="text-sm font-semibold text-heading truncate">{{ session.module }}</h4>
                  <p v-if="session.student" class="mt-0.5 text-xs text-body flex items-center gap-1">
                    <svg class="h-3.5 w-3.5 shrink-0 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    {{ session.student }}
                  </p>
                </div>
                <div v-if="session.duration" class="shrink-0 text-right">
                  <p class="text-xs font-medium text-body">{{ formatTime(session.date) }}</p>
                  <p class="text-xs text-muted">{{ session.duration }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
