import MembersOnlyNewsletter from "../member-only-newsletter";
import MembersOnlyContactInfo from "../contact/members-only-contact-info";
import MembersOnlyContactForm from "../contact/members-only-contact-form";

// ----------------------------------------------------------------------

export default function MembersOnlyContactView() {
  return (
    <>
      <MembersOnlyContactInfo />

      <MembersOnlyContactForm />

      <MembersOnlyNewsletter />
    </>
  );
}
