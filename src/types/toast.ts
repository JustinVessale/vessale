import * as React from "react";
import { type Toast as ToastPrimitive } from "@/components/ui/toast"

export enum ToastActionType {
  ADD = 'ADD_TOAST',
  UPDATE = 'UPDATE_TOAST',
  DISMISS = 'DISMISS_TOAST',
  REMOVE = 'REMOVE_TOAST',
}

export enum ToastDuration {
  SHORT = 2000,
  MEDIUM = 4000,
  LONG = 6000,
}

// Define the action element type
export type ToastActionElement = React.ReactElement<typeof ToastPrimitive.Action>

// Define the props interface that includes all possible toast properties
export interface ToastProps {
  id: string;
  className?: string;
  duration?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface ToasterToast extends ToastProps {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
}

export interface ToastAction {
  type: ToastActionType;
  toast?: ToasterToast;
  toastId?: string;
}