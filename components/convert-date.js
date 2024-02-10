import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

export default function CovertDate({ dateISO }) {
  return (
    <time DateTime={dateISO}>
      {format(parseISO(dateISO), 'yyyy年MM月dd日', {
        locale: ja,
      })}
    </time>
  )
}
