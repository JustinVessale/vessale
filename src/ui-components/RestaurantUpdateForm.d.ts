/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Restaurant } from "../API.ts";
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
export declare type RestaurantUpdateFormInputValues = {
    name?: string;
    subdomain?: string;
    branding_banner?: string;
    branding_color?: string;
    chain_id?: string;
};
export declare type RestaurantUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    subdomain?: ValidationFunction<string>;
    branding_banner?: ValidationFunction<string>;
    branding_color?: ValidationFunction<string>;
    chain_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RestaurantUpdateFormOverridesProps = {
    RestaurantUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    subdomain?: PrimitiveOverrideProps<TextFieldProps>;
    branding_banner?: PrimitiveOverrideProps<TextFieldProps>;
    branding_color?: PrimitiveOverrideProps<TextFieldProps>;
    chain_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RestaurantUpdateFormProps = React.PropsWithChildren<{
    overrides?: RestaurantUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    restaurant?: Restaurant;
    onSubmit?: (fields: RestaurantUpdateFormInputValues) => RestaurantUpdateFormInputValues;
    onSuccess?: (fields: RestaurantUpdateFormInputValues) => void;
    onError?: (fields: RestaurantUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RestaurantUpdateFormInputValues) => RestaurantUpdateFormInputValues;
    onValidate?: RestaurantUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RestaurantUpdateForm(props: RestaurantUpdateFormProps): React.ReactElement;
