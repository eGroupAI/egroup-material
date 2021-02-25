import { AxiosError, AxiosResponse } from 'axios';
import { StringifiableRecord } from 'query-string';
import { ConfigInterface, responseInterface } from 'swr';

export interface PathParams {
  [key: string]: string | undefined;
}

export interface ReturnedValues<Data, ErrorData> {
  data?: Data;
  mutate: responseInterface<
    AxiosResponse<Data>,
    AxiosError<ErrorData>
  >['mutate'];
  response?: AxiosResponse<Data>;
  error?: AxiosError<ErrorData>;
  isError: boolean;
  key: string | null;
  revalidate: () => Promise<boolean>;
  isValidating: boolean;
}

export type UseItem<T, P, E> = <Data = T, ErrorData = E>(
  params?: P,
  payload?: StringifiableRecord,
  config?: ConfigInterface<AxiosResponse<Data>, AxiosError<ErrorData>>
) => ReturnedValues<Data, ErrorData>;