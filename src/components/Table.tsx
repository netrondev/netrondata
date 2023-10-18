import React, {
  useState,
  type CSSProperties,
  useImperativeHandle,
  type ReactNode,
} from "react";

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  type ColumnDef,
  flexRender,
  type SortingState,
  getSortedRowModel,
  type Row,
  type TableOptions,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  type ColumnFiltersState,
  type OnChangeFn,
} from "@tanstack/react-table";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import clsx from "clsx";
import {
  HiOutlineArrowDown,
  HiOutlineArrowUp,
  HiOutlineSwitchVertical,
} from "react-icons/hi";
import { cn } from "../utils/cn";
import { Tooltip } from "./Tooltip";
import { Button } from "./Button";
import { Input } from "./Input";

// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return (
    <div className="hover:bg-neutral-50">
      <Input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full flex-1 appearance-none border-none bg-transparent p-1 text-xs font-light no-indicator"
      />
    </div>
  );
}

export type TableStyledRef<T> = {
  setColumnFilters: (filters: ColumnFiltersState) => void;
  test: (data: T) => void;
};

export function Table<T>(props: {
  data: T[];
  columns: (ColumnDef<T> & { tooltip?: string; Filter?: ReactNode })[];
  usePagination?: boolean;
  rowUrl?: (row: Row<T>) => string;
  className?: (row: Row<T>) => string;
  styleRow?: (row: Row<T>) => CSSProperties | undefined;
  innerRef?: React.Ref<TableStyledRef<T>>;
  tableOptions?: Partial<TableOptions<T>>;
  onColumnFiltersChange?: (props: ColumnFiltersState) => void;
}) {
  const [page_input, page_input_set] = useState<number>(0);

  props.tableOptions?.initialState?.sorting;

  const [sorting, setSorting] = React.useState<SortingState>(
    props.tableOptions?.initialState?.sorting ?? [
      {
        id: "id",
        desc: false,
      },
    ]
  );

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const onColumnFiltersChange: OnChangeFn<ColumnFiltersState> = (updater) => {
    const updater_t = updater as (pr: ColumnFiltersState) => ColumnFiltersState;
    const nextstate = updater_t(columnFilters);
    setColumnFilters(nextstate);
    if (props.onColumnFiltersChange) props.onColumnFiltersChange(nextstate);
  };

  useImperativeHandle(props.innerRef, () => ({
    setColumnFilters(options) {
      setColumnFilters(options);
    },
    test: (data: T) => {
      console.log(data);
    },
  }));

  const table = useReactTable({
    data: props.data,
    columns: props.columns,
    state: {
      sorting,
      columnFilters,
      pagination: {
        pageIndex: page_input,
        pageSize: 10,
      },
    },
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    //
    initialState: {
      pagination: { pageSize: 10, pageIndex: 0 },
      ...props.tableOptions?.initialState,
    },
    // debugTable: true,

    onSortingChange: setSorting,
    onColumnFiltersChange,
    ...props.tableOptions,
  });

  return (
    <div className="w-full dark:text-neutral-400">
      {/* <TableFilters table={table} />
        <TableFilters table={table} chiplist /> */}
      <table className="w-full ">
        <thead className=" overflow-hidden rounded-t-xl dark:text-neutral-300 ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, idx) => {
                const head = props.columns[idx];

                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={clsx(
                      "p-0 text-left font-semibold uppercase text-xs"
                    )}
                    style={{
                      width: header.getSize(),
                    }}
                  >
                    {!header.isPlaceholder && (
                      <>
                        <div className="flex items-center px-1 py-3">
                          {head?.tooltip ? (
                            <Tooltip tooltip={head.tooltip}>
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </Tooltip>
                          ) : (
                            flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )
                          )}

                          <div
                            className={cn(
                              String(
                                header.column?.columnDef?.header
                              )?.trim() === ""
                                ? "w-1.5"
                                : "flex-1"
                            )}
                          />

                          {/* <Button
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {header.column.getIsSorted() === false && (
                              <HiOutlineSwitchVertical
                                className="text-neutral-300 transition group-hover:text-purple-600"
                                size={16}
                              />
                            )}
                            {header.column.getIsSorted() === "asc" && (
                              <HiOutlineArrowDown
                                className="text-neutral-600 transition group-hover:text-purple-600"
                                size={16}
                              />
                            )}
                            {header.column.getIsSorted() === "desc" && (
                              <HiOutlineArrowUp
                                className="text-neutral-600 transition group-hover:text-purple-600"
                                size={16}
                              />
                            )}
                          </Button> */}
                        </div>
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className={cn(
                  "border-b transition dark:border-neutral-700",
                  props.className ? props.className(row) : "",
                  props.rowUrl && "cursor-pointer hover:text-neutral-800"
                )}
                // onClick={() => {
                //   if (props.rowUrl) props.rowUrl(row);
                // }}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className={clsx(
                        "m-0 whitespace-nowrap p-0 text-xs font-medium"
                      )}
                    >
                      <div className="m-0 flex h-full w-full p-0">
                        <div
                          // href={props.rowUrl ? props.rowUrl(row) : ""}
                          className="w-full flex-1 px-2 py-3"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex items-center gap-2 py-5 text-sm text-neutral-500">
        <Button
          onClick={() => {
            const page = table.getState().pagination.pageIndex - 1;
            if (page < 0) return;
            table.setPageIndex(page);
            page_input_set(page);
            // table.previousPage();
          }}
          disabled={!table.getCanPreviousPage()}
        >
          <FiChevronLeft size={22} />
        </Button>
        <Input
          type="number"
          className="w-15 text-center"
          value={page_input + 1}
          min={1}
          max={table.getPageCount()}
          onChange={(e) => {
            const page = e.target.valueAsNumber - 1;
            if (page < 0) page_input_set(page + 2);
            page_input_set(page);
            table.setPageIndex(page);
          }}
        />
        /&nbsp;{table.getPageCount()}
        {/* {table.getState().pagination.pageIndex + 1} */}
        <Button
          onClick={() => {
            const page = page_input + 1;
            table.setPageIndex(page);
            page_input_set(page);
            // table.nextPage();
          }}
          disabled={!table.getCanNextPage()}
        >
          <FiChevronRight size={22} />
        </Button>
        <span>
          Showing&nbsp;
          {table.getState().pagination.pageSize *
            table.getState().pagination.pageIndex}
          &nbsp;-&nbsp;
          {table.getState().pagination.pageSize *
            (table.getState().pagination.pageIndex + 1)}
          &nbsp;of&nbsp;{props.data.length}
        </span>
      </div>
    </div>
  );
}
