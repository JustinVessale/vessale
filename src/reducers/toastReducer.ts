// src/reducers/toastReducer.ts
import { ToastActionType, ToastAction, ToasterToast } from '../types/toast';
import { TOAST_SETTINGS } from '../constants/toast'

interface ToastState {
  toasts: ToasterToast[];
}

export const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case ToastActionType.ADD:
      return {
        ...state,
        toasts: [action.toast!, ...state.toasts].slice(0, TOAST_SETTINGS.LIMIT),
      };

    case ToastActionType.UPDATE:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast!.id ? { ...t, ...action.toast } : t
        ),
      };

    case ToastActionType.DISMISS: {
      const { toastId } = action;
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }

    case ToastActionType.REMOVE:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };

    default:
      return state;
  }
};