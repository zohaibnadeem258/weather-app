import { DateTime } from 'luxon'

const formatToLocalTime = (sec, offset, format) => {
    return DateTime.fromSeconds(sec + offset, { zone: 'utc' }).toFormat(format)
}

export default formatToLocalTime