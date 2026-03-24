function was_package_received_yesterday(tz_from, tz_to, start, duration) {
  return start + duration + (tz_to - tz_from) < 0
}
