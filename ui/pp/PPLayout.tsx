import Image from 'next/image';
import Link from 'next/link';
import { ThemeSwitcher } from '../components/theme/ThemeSwitcher';
import { homeStyle } from '../home/styles.css';
import { linkInsertion } from '../theme/theme.css';
import { tp } from '../theme/typography.css';

export const PPLayout = () => {
  return (
    <div className={homeStyle.content}>
      <div className={homeStyle.img}>
        <Image src="/logo.svg" width={30} height={34} alt="Avocado team logo" quality={100} />
        <ThemeSwitcher />
      </div>
      <h1 className={tp({ variant: 'head', m: 'r.25' })}>Privacy Policy</h1>
      <p className={tp({ variant: 'head2', m: 'r.25' })}>Updated May 28, 2022</p>
      <p className={tp({ variant: 'body' })}>
        Introduction Avocado Studio (“Us”, “We” or “Our”) respects your privacy and develops Stokks (“The App”) with
        commitment to protecting it.
      </p>
      <p className={tp({ variant: 'body' })}>
        This policy applies to information collected through the app only and does not cover information collected through
        ellectronic communications (i.e. email) sent to us.
      </p>
      <p className={tp({ variant: 'body' })}>
        By downloading and/or using the app you agree to this Privacy Policy. The Privacy Policy might change time to time.
        We reserve the right not to notify you about this updates. Your continuous use of the app means that you accept the
        updates, so we recommend checking it time to time.
      </p>
      <p className={tp({ variant: 'body' })}>
        Changes apply at the exact moment the Privacy Policy is updated on this page.
      </p>
      <p className={tp({ variant: 'body' })}>
        Together with Terms and Conditions, this Privacy Policy forms an Agreement between you and us.
      </p>
      <h2 className={tp({ variant: 'head2', m: 'r.25' })}>Information We Collect and How We Collect It</h2>
      <p className={tp({ variant: 'body' })}>We collect the following information:</p>
      <ul>
        <li className={tp({ variant: 'body' })}>
          At the moment of registration, We receive an anonymous identifier used to assign information collected to you. The
          identifier is provided by Google (Alphabet Inc.) and is random.
        </li>
        <li className={tp({ variant: 'body' })}>
          We collect metrics of your activity in the app on certain actions that are anonymous and cannot be used to track
          your persona.
        </li>
      </ul>
      <h2 className={tp({ variant: 'head2', m: 'r.25' })}>How We Use Your Information</h2>
      <p className={tp({ variant: 'body' })}>
        We use information collected or provided by you, including any personal information, to:
      </p>
      <ul>
        <li className={tp({ variant: 'body' })}>Provide The App and other of our services with content.</li>
        <li className={tp({ variant: 'body' })}>Fulfill any other purpose for which you provide it.</li>
        <li className={tp({ variant: 'body' })}>Gather statistics and monitor usage of The App.</li>
        <li className={tp({ variant: 'body' })}>Prevent, address and detect technical issues.</li>
        <li className={tp({ variant: 'body' })}>
          Provide you with notices about your account and/or subscription, including expiration and renewal notices,
          email-instructions, etc.;
        </li>
        <li className={tp({ variant: 'body' })}>Provide support.</li>
        <li className={tp({ variant: 'body' })}>Comply with any court order, law, or other legal process.</li>
      </ul>
      <h2 className={tp({ variant: 'head2', m: 'r.25' })}>Disclosure of Your Information</h2>
      <p className={tp({ variant: 'body' })}>
        We may disclose information that is not private and which does not contain information that could be tied your
        identity without any restriction and/or notice.
      </p>
      <p className={tp({ variant: 'body' })}>We may also disclose information to:</p>
      <ul>
        <li className={tp({ variant: 'body' })}>Subsidiaries and affiliates.</li>
        <li className={tp({ variant: 'body' })}>Service providers.</li>
      </ul>
      <h2 className={tp({ variant: 'head2', m: 'r.25' })}>Accessing, Editing and Deleting Your Personal Information</h2>
      <p className={tp({ variant: 'body' })}>
        You can request to delete all of your information stored by us in The App’s settings. We may not fulfill your request
        if it conflicts with any law or legal requirement.
      </p>
      <h2 className={tp({ variant: 'head2', m: 'r.25' })}>Contact Us</h2>
      <p className={tp({ variant: 'body' })}>
        You can contact us at{' '}
        <Link href="mailto:work@avocado.st" target="_blank" className={linkInsertion}>
          work@avocado.st
        </Link>
      </p>
    </div>
  );
};
