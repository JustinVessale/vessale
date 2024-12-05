/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MenuItemCreateFormInputValues = {
    name?: string;
    description?: string;
    price?: number;
    categoryID?: string;
};
export declare type MenuItemCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    categoryID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenuItemCreateFormOverridesProps = {
    MenuItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    categoryID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MenuItemCreateFormProps = React.PropsWithChildren<{
    overrides?: MenuItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MenuItemCreateFormInputValues) => MenuItemCreateFormInputValues;
    onSuccess?: (fields: MenuItemCreateFormInputValues) => void;
    onError?: (fields: MenuItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MenuItemCreateFormInputValues) => MenuItemCreateFormInputValues;
    onValidate?: MenuItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function MenuItemCreateForm(props: MenuItemCreateFormProps): React.ReactElement;
