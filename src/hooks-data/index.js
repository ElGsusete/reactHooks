export const hookCategories = [
  {
    id: 'state',
    title: 'State Hooks',
    hooks: ['useState', 'useReducer']
  },
  {
    id: 'effect',
    title: 'Effect Hooks',
    hooks: ['useEffect', 'useLayoutEffect', 'useInsertionEffect']
  },
  {
    id: 'context',
    title: 'Context Hooks',
    hooks: ['useContext']
  },
  {
    id: 'performance',
    title: 'Performance Hooks',
    hooks: ['useMemo', 'useCallback', 'useTransition', 'useDeferredValue']
  },
  {
    id: 'ref',
    title: 'Ref Hooks',
    hooks: ['useRef', 'useImperativeHandle']
  },
  {
    id: 'react19',
    title: 'React 19 Hooks',
    hooks: ['use', 'useOptimistic', 'useFormStatus', 'useActionState']
  },
  {
    id: 'other',
    title: 'Other Hooks',
    hooks: ['useId', 'useDebugValue', 'useSyncExternalStore']
  },
  {
    id: 'custom',
    title: 'Custom Hooks',
    hooks: ['useLocalStorage', 'useFetch', 'useDebounce']
  }
];

import UseStateDemo from './useState/demo';
import { useStateCode } from './useState/code';
import { useStateDocs } from './useState/docs';

export const hooksRegistry = {
  useState: {
    name: 'useState',
    description: 'Permite añadir estado local a componentes funcionales.',
    docs: 'https://react.dev/reference/react/useState',
    demo: UseStateDemo,
    code: useStateCode,
    guide: useStateDocs
  },
  // We will populate this as we build
};
