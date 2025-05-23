import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { countries } from "../../../assets/data/countries";
import FormProvider, {
  RHFSelect,
  RHFTextField,
  RHFAutocomplete,
} from "../../../components/hook-form";

// ----------------------------------------------------------------------

const GENDER_OPTIONS = ["Male", "Female", "Other"];

// ----------------------------------------------------------------------

export default function AccountProfile() {
  const member = JSON.parse(sessionStorage.getItem("member"));

  const EcommerceAccountPersonalSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phoneNumber: Yup.string(),
    birthday: Yup.mixed().nullable(),
    gender: Yup.string(),
    streetAddress: Yup.string(),
    city: Yup.string(),
    country: Yup.string(),
    postalCode: Yup.string(),
  });

  const defaultValuesPer = {
    firstName: member?.member.first_name || "",
    lastName: member?.member.last_name || "",
    phoneNumber: "365-374-4961",
    birthday: null,
    gender: "Other",
    streetAddress: "",
    postalCode: "",
    city: "",
    country: "Canada",
  };

  const methods = useForm({
    resolver: yupResolver(EcommerceAccountPersonalSchema),
    defaultValues: defaultValuesPer,
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    console.log("SUBMIT TRIGGERED", data);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      methods.reset();
      console.log("Password DATA", data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3} sx={{ my: 5 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Personal
        </Typography>

        <Box
          rowGap={2.5}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        >
          <RHFTextField name="firstName" label="First Name" />

          <RHFTextField name="lastName" label="Last Name" />

          <RHFTextField name="phoneNumber" label="Phone Number" />

          <Controller
            name="birthday"
            render={({ field, fieldState: { error } }) => (
              <DatePicker
                label="Birthday"
                slotProps={{
                  textField: {
                    helperText: error?.message,
                    error: !!error?.message,
                  },
                }}
                {...field}
                value={field.value}
              />
            )}
          />

          <RHFSelect native name="gender" label="Gender">
            {GENDER_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </RHFSelect>

          <RHFTextField name="streetAddress" label="Street Address" />

          <RHFTextField name="postalCode" label="Postal Code" />

          <RHFTextField name="city" label="City" />

          <RHFAutocomplete
            name="country"
            type="country"
            label="Country"
            placeholder="Choose a country"
            fullWidth
            options={countries.map((option) => option.label)}
            getOptionLabel={(option) => option}
          />
        </Box>
      </Stack>
      <Box sx={{ textAlign: "right" }}>
        <LoadingButton
          color="inherit"
          size="medium"
          type="submit"
          variant="contained"
          loading={methods.formState.isSubmitting}
          sx={{ mt: 5, mb: 5 }}
        >
          Save Changes
        </LoadingButton>
      </Box>
    </FormProvider>
  );
}
