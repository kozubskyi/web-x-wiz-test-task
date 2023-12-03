import {
  FilterProps,
  SortByFn,
  UseGlobalFiltersInstanceProps,
  UseGlobalFiltersOptions,
} from 'react-table';

export type GlobalFilterT<T extends object> = (
  props: Partial<UseGlobalFiltersOptions<T> & UseGlobalFiltersInstanceProps<T>>
) => JSX.Element;

export type ColumnFilterT<T extends object> = (
  props: FilterProps<T>
) => JSX.Element;

// export const sortTypes: Record<string, SortByFn<any>> = {
//   // перезаписывает встроенный тип `string`
//   string: (rowA, rowB, columnId, desc) => {
//     const [a, b] = [rowA.values[columnId], rowB.values[columnId]] as [
//       string,
//       string
//     ]

//     return a.localeCompare(b, 'en')
//   }
// }
