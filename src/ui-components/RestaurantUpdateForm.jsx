/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getRestaurant } from "../graphql/queries";
import { updateRestaurant } from "../graphql/mutations";
const client = generateClient();
export default function RestaurantUpdateForm(props) {
  const {
    id: idProp,
    restaurant: restaurantModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    subdomain: "",
    branding_banner: "",
    branding_color: "",
    chain_id: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [subdomain, setSubdomain] = React.useState(initialValues.subdomain);
  const [branding_banner, setBranding_banner] = React.useState(
    initialValues.branding_banner
  );
  const [branding_color, setBranding_color] = React.useState(
    initialValues.branding_color
  );
  const [chain_id, setChain_id] = React.useState(initialValues.chain_id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = restaurantRecord
      ? { ...initialValues, ...restaurantRecord }
      : initialValues;
    setName(cleanValues.name);
    setSubdomain(cleanValues.subdomain);
    setBranding_banner(cleanValues.branding_banner);
    setBranding_color(cleanValues.branding_color);
    setChain_id(cleanValues.chain_id);
    setErrors({});
  };
  const [restaurantRecord, setRestaurantRecord] =
    React.useState(restaurantModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getRestaurant.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRestaurant
        : restaurantModelProp;
      setRestaurantRecord(record);
    };
    queryData();
  }, [idProp, restaurantModelProp]);
  React.useEffect(resetStateValues, [restaurantRecord]);
  const validations = {
    name: [],
    subdomain: [],
    branding_banner: [],
    branding_color: [],
    chain_id: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name: name ?? null,
          subdomain: subdomain ?? null,
          branding_banner: branding_banner ?? null,
          branding_color: branding_color ?? null,
          chain_id: chain_id ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateRestaurant.replaceAll("__typename", ""),
            variables: {
              input: {
                id: restaurantRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "RestaurantUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              subdomain,
              branding_banner,
              branding_color,
              chain_id,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Subdomain"
        isRequired={false}
        isReadOnly={false}
        value={subdomain}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              subdomain: value,
              branding_banner,
              branding_color,
              chain_id,
            };
            const result = onChange(modelFields);
            value = result?.subdomain ?? value;
          }
          if (errors.subdomain?.hasError) {
            runValidationTasks("subdomain", value);
          }
          setSubdomain(value);
        }}
        onBlur={() => runValidationTasks("subdomain", subdomain)}
        errorMessage={errors.subdomain?.errorMessage}
        hasError={errors.subdomain?.hasError}
        {...getOverrideProps(overrides, "subdomain")}
      ></TextField>
      <TextField
        label="Branding banner"
        isRequired={false}
        isReadOnly={false}
        value={branding_banner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              subdomain,
              branding_banner: value,
              branding_color,
              chain_id,
            };
            const result = onChange(modelFields);
            value = result?.branding_banner ?? value;
          }
          if (errors.branding_banner?.hasError) {
            runValidationTasks("branding_banner", value);
          }
          setBranding_banner(value);
        }}
        onBlur={() => runValidationTasks("branding_banner", branding_banner)}
        errorMessage={errors.branding_banner?.errorMessage}
        hasError={errors.branding_banner?.hasError}
        {...getOverrideProps(overrides, "branding_banner")}
      ></TextField>
      <TextField
        label="Branding color"
        isRequired={false}
        isReadOnly={false}
        value={branding_color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              subdomain,
              branding_banner,
              branding_color: value,
              chain_id,
            };
            const result = onChange(modelFields);
            value = result?.branding_color ?? value;
          }
          if (errors.branding_color?.hasError) {
            runValidationTasks("branding_color", value);
          }
          setBranding_color(value);
        }}
        onBlur={() => runValidationTasks("branding_color", branding_color)}
        errorMessage={errors.branding_color?.errorMessage}
        hasError={errors.branding_color?.hasError}
        {...getOverrideProps(overrides, "branding_color")}
      ></TextField>
      <TextField
        label="Chain id"
        isRequired={false}
        isReadOnly={false}
        value={chain_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              subdomain,
              branding_banner,
              branding_color,
              chain_id: value,
            };
            const result = onChange(modelFields);
            value = result?.chain_id ?? value;
          }
          if (errors.chain_id?.hasError) {
            runValidationTasks("chain_id", value);
          }
          setChain_id(value);
        }}
        onBlur={() => runValidationTasks("chain_id", chain_id)}
        errorMessage={errors.chain_id?.errorMessage}
        hasError={errors.chain_id?.hasError}
        {...getOverrideProps(overrides, "chain_id")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || restaurantModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || restaurantModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
