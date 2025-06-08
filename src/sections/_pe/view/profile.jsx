import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { parseISO } from "date-fns";

import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setMember } from "../../../store/memberSlice";
import { parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

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
import { useUpdateMember } from "../../../members/useUpdateMember";

import { useUpdateMember } from "../../../members/useUpdateMember";

// ----------------------------------------------------------------------

const GENDER_OPTIONS = ["Male", "Female", "Other"];

// ----------------------------------------------------------------------

export default function AccountProfile() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const member = useSelector((state) => state.member.member);
  const { updateMember } = useUpdateMember();

  console.log("Member Data ~ AccountProfile: ", member);
  const { mutate } = useUpdateMember();

  const EcommerceAccountPersonalSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phoneNumber: Yup.string()
      .matches(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        "Phone number must be in format XXX-XXX-XXXX, XXXXXXXXXX, or (XXX) XXX-XXXX"
      )
      .transform((value) => {
        // Remove all non-digit characters
        const digits = value.replace(/\D/g, "");
        // Format as XXX-XXX-XXXX
        if (digits.length === 10) {
          return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(
            6
          )}`;
        }
        return value;
      }),
    birthday: Yup.mixed().nullable(),
    gender: Yup.string(),
    streetAddress: Yup.string(),
    city: Yup.string(),
    country: Yup.string(),
    postalCode: Yup.string(),
  });

  const defaultValues = {
    firstName: member?.member.first_name || "",
    lastName: member?.member.last_name || "",
    phoneNumber: member?.member.phone || "",
    birthday: member?.member.dateOfBirth
      ? parseISO(member.member.dateOfBirth)
      : null,
    gender: member?.member.gender || "Other",
    streetAddress: member?.member.streetAddress || "",
    postalCode: member?.member.postalCode || "",
    city: member?.member.city || "",
    country: member?.member.country || "Canada",
  };

  const methods = useForm({
    resolver: yupResolver(EcommerceAccountPersonalSchema),
    defaultValues,
  });

  // useEffect(() => {
  //   if (member) {
  //     methods.reset({
  //       firstName: member?.member.first_name || "",
  //       lastName: member?.member.last_name || "",
  //       phoneNumber: member?.member?.phone || "",
  //       birthday: member?.member?.dateOfBirth
  //         ? parseISO(member.member.dateOfBirth)
  //         : null,
  //       gender: member?.member?.gender,
  //       streetAddress: member?.member?.streetAddress || "",
  //       postalCode: member?.member?.postalCode || "",
  //       city: member?.member?.city || "",
  //       country: member?.member?.country || "",
  //     });
  //   }
  // }, [member, methods]);

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      await updateMember({
        first_name: data.firstName,
        last_name: data.lastName,
        phoneNumber: data.phoneNumber,
        dateOfBirth: data.birthday,
        gender: data.gender,
        phone: data.phoneNumber,
        streetAddress: data.streetAddress,
        postalCode: data.postalCode,
        city: data.city,
        country: data.country,
      });
      methods.reset();
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
            render={({ field }) => (
              <DatePicker
                label="Birthday"
                value={field.value}
                onChange={(newValue) => {
                  field.onChange(newValue);
                }}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: !!methods.formState.errors.birthday,
                    helperText: methods.formState.errors.birthday?.message,
                  },
                }}
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
