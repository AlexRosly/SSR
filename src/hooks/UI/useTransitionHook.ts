export const useTransitionHook = ({
  timeoutMs,
  className,
}: {
  timeoutMs: number;
  className:
    | string
    | { base: string; beforeOpen: string }
    | { base: string; afterClose: string }
    | { base: string; beforeOpen: string; afterClose: string };
}) => {};
