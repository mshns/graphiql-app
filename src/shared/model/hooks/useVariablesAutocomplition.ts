import { CompletionContext } from '@codemirror/autocomplete';
import { useCallback, useMemo } from 'react';
import { useAppSelector } from './useRedux';

export const useVariablesAutocomplition = () => {
  const { query } = useAppSelector((state) => state.editorReducer);

  const options = useMemo(() => {
    const variables = query.match(/\$\w*:\s*\w*/g);

    return variables?.map((variable) => {
      const variableArr = variable.slice(1).split(':');
      return {
        label: '"' + variableArr[0],
        detail: variableArr[1]
      };
    });
  }, [query]);

  const variablesAutocomplition = useCallback(
    (context: CompletionContext) => {
      const word = context.matchBefore(/(?<!([:\w]\s*))("\w*)/);
      if (!word || !options) {
        return null;
      }

      if (word.from === word.to && !context.explicit) {
        return null;
      }

      return {
        from: word.from,
        options: options
      };
    },
    [options]
  );

  return { variablesAutocomplition };
};
