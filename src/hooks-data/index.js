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

import UseReducerDemo from './useReducer/demo';
import { useReducerCode } from './useReducer/code';
import { useReducerDocs } from './useReducer/docs';

import UseEffectDemo from './useEffect/demo';
import { useEffectCode } from './useEffect/code';
import { useEffectDocs } from './useEffect/docs';

import UseLayoutEffectDemo from './useLayoutEffect/demo';
import { useLayoutEffectCode } from './useLayoutEffect/code';
import { useLayoutEffectDocs } from './useLayoutEffect/docs';

import UseInsertionEffectDemo from './useInsertionEffect/demo';
import { useInsertionEffectCode } from './useInsertionEffect/code';
import { useInsertionEffectDocs } from './useInsertionEffect/docs';

import UseContextDemo from './useContext/demo';
import { useContextCode } from './useContext/code';
import { useContextDocs } from './useContext/docs';

import UseMemoDemo from './useMemo/demo';
import { useMemoCode } from './useMemo/code';
import { useMemoDocs } from './useMemo/docs';

import UseCallbackDemo from './useCallback/demo';
import { useCallbackCode } from './useCallback/code';
import { useCallbackDocs } from './useCallback/docs';

import UseTransitionDemo from './useTransition/demo';
import { useTransitionCode } from './useTransition/code';
import { useTransitionDocs } from './useTransition/docs';

import UseDeferredValueDemo from './useDeferredValue/demo';
import { useDeferredValueCode } from './useDeferredValue/code';
import { useDeferredValueDocs } from './useDeferredValue/docs';

import UseRefDemo from './useRef/demo';
import { useRefCode } from './useRef/code';
import { useRefDocs } from './useRef/docs';

import UseImperativeHandleDemo from './useImperativeHandle/demo';
import { useImperativeHandleCode } from './useImperativeHandle/code';
import { useImperativeHandleDocs } from './useImperativeHandle/docs';

import UseIdDemo from './useId/demo';
import { useIdCode } from './useId/code';
import { useIdDocs } from './useId/docs';

import UseDebugValueDemo from './useDebugValue/demo';
import { useDebugValueCode } from './useDebugValue/code';
import { useDebugValueDocs } from './useDebugValue/docs';

import UseSyncExternalStoreDemo from './useSyncExternalStore/demo';
import { useSyncExternalStoreCode } from './useSyncExternalStore/code';
import { useSyncExternalStoreDocs } from './useSyncExternalStore/docs';

export const hooksRegistry = {
  useState: {
    name: 'useState',
    description: 'Permite añadir estado local a componentes funcionales.',
    docs: 'https://react.dev/reference/react/useState',
    demo: UseStateDemo,
    code: useStateCode,
    guide: useStateDocs
  },
  useReducer: {
    name: 'useReducer',
    description: 'Alternativa a useState para estados complejos con lógica de transición.',
    docs: 'https://react.dev/reference/react/useReducer',
    demo: UseReducerDemo,
    code: useReducerCode,
    guide: useReducerDocs
  },
  useEffect: {
    name: 'useEffect',
    description: 'Permite ejecutar efectos secundarios (suscripciones, peticiones, DOM).',
    docs: 'https://react.dev/reference/react/useEffect',
    demo: UseEffectDemo,
    code: useEffectCode,
    guide: useEffectDocs
  },
  useLayoutEffect: {
    name: 'useLayoutEffect',
    description: 'Similar a useEffect pero se ejecuta de forma síncrona antes del pintado.',
    docs: 'https://react.dev/reference/react/useLayoutEffect',
    demo: UseLayoutEffectDemo,
    code: useLayoutEffectCode,
    guide: useLayoutEffectDocs
  },
  useInsertionEffect: {
    name: 'useInsertionEffect',
    description: 'Permite inyectar estilos en el DOM antes de que se activen los efectos de layout.',
    docs: 'https://react.dev/reference/react/useInsertionEffect',
    demo: UseInsertionEffectDemo,
    code: useInsertionEffectCode,
    guide: useInsertionEffectDocs
  },
  useContext: {
    name: 'useContext',
    description: 'Permite acceder al valor de un contexto sin necesidad de prop-drilling.',
    docs: 'https://react.dev/reference/react/useContext',
    demo: UseContextDemo,
    code: useContextCode,
    guide: useContextDocs
  },
  useMemo: {
    name: 'useMemo',
    description: 'Memoriza el resultado de un cálculo costoso entre renderizados.',
    docs: 'https://react.dev/reference/react/useMemo',
    demo: UseMemoDemo,
    code: useMemoCode,
    guide: useMemoDocs
  },
  useCallback: {
    name: 'useCallback',
    description: 'Memoriza una definición de función entre renderizados para evitar re-renders.',
    docs: 'https://react.dev/reference/react/useCallback',
    demo: UseCallbackDemo,
    code: useCallbackCode,
    guide: useCallbackDocs
  },
  useTransition: {
    name: 'useTransition',
    description: 'Permite marcar actualizaciones de estado como transiciones no urgentes.',
    docs: 'https://react.dev/reference/react/useTransition',
    demo: UseTransitionDemo,
    code: useTransitionCode,
    guide: useTransitionDocs
  },
  useDeferredValue: {
    name: 'useDeferredValue',
    description: 'Difiere la actualización de un valor para evitar bloqueos en la UI.',
    docs: 'https://react.dev/reference/react/useDeferredValue',
    demo: UseDeferredValueDemo,
    code: useDeferredValueCode,
    guide: useDeferredValueDocs
  },
  useRef: {
    name: 'useRef',
    description: 'Permite acceder a elementos del DOM o guardar valores mutables que no disparan renders.',
    docs: 'https://react.dev/reference/react/useRef',
    demo: UseRefDemo,
    code: useRefCode,
    guide: useRefDocs
  },
  useImperativeHandle: {
    name: 'useImperativeHandle',
    description: 'Personaliza el valor expuesto por una referencia en componentes hijos.',
    docs: 'https://react.dev/reference/react/useImperativeHandle',
    demo: UseImperativeHandleDemo,
    code: useImperativeHandleCode,
    guide: useImperativeHandleDocs
  },
  useId: {
    name: 'useId',
    description: 'Genera identificadores únicos estables para accesibilidad y SSR.',
    docs: 'https://react.dev/reference/react/useId',
    demo: UseIdDemo,
    code: useIdCode,
    guide: useIdDocs
  },
  useDebugValue: {
    name: 'useDebugValue',
    description: 'Añade etiquetas personalizadas a hooks propios en las React DevTools.',
    docs: 'https://react.dev/reference/react/useDebugValue',
    demo: UseDebugValueDemo,
    code: useDebugValueCode,
    guide: useDebugValueDocs
  },
  useSyncExternalStore: {
    name: 'useSyncExternalStore',
    description: 'Permite suscribirse a fuentes de datos externas a React de forma segura.',
    docs: 'https://react.dev/reference/react/useSyncExternalStore',
    demo: UseSyncExternalStoreDemo,
    code: useSyncExternalStoreCode,
    guide: useSyncExternalStoreDocs
  },
  // We will populate this as we build
};
