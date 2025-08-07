'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { t } from '@lingui/core/macro';

import { Form, FormMessage } from '../ui/form';
import FormHeader from '../atoms/FormHeader';
import FormInput from '../atoms/FormInput';
import FormCheckbox from '../atoms/FormCheckbox';
import SubmitButton from '../atoms/SubmitButton';
import FormSection from '../molecules/FormSection';
import FormNavigation from '../molecules/FormNavigation';
import { redirect } from 'next/navigation';

const formSchema = z.object({
  identityCode: z
    .string()
    .min(3, 'ID must be at least 3 characters')
    .max(30, 'ID can’t exceed 30 characters')
    .regex(
      /^[A-Za-z0-9_]+$/,
      'ID may contain letters, numbers, and underscores only',
    ),
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .regex(/^[A-Za-z]+$/, 'Name may contain letters only'),
  surname: z
    .string()
    .min(3, 'Surname must be at least 3 characters')
    .regex(/^[A-Za-z]+$/, 'Surname may contain letters only'),
  email: z.string().email({ message: 'Invalid email address' }),
  secureKey: z.string().min(6, 'Secure key must be at least 6 characters'),
  terms: z.boolean().refine((val) => val, {
    message: 'You must accept the terms and conditions',
  }),
});

export default function RegisterForm() {
  const { i18n } = useLingui();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identityCode: '',
      name: '',
      surname: '',
      email: '',
      secureKey: '',
      terms: false,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = await fetch('https://api.calvero.club/auth/join', {
      method: 'POST',
      body: JSON.stringify({
        identityCode: values.identityCode,
        givenName: values.name,
        surname: values.surname,
        contactEmail: values.email,
        secureKey: values.secureKey,
      }),
    });
    if (data.ok) {
      redirect('/');
    } else {
      form.setError('root', {
        message: t(i18n)`Something went wrong`,
      });
    }
  }
  return (
    <div className="w-full p-8 mx-auto flex flex-col gap-4">
      <FormHeader
        title={t(i18n)`Create Your Calvero ID`}
        description={t(
          i18n,
        )`Enter the circle of timeless elegance. Complete the form below to begin your journey with Calvero.`}
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mx-auto">
          <FormSection>
            <FormInput
              control={form.control}
              name="identityCode"
              label={t(i18n)`Identity Code`}
              placeholder={t(i18n)`Identity Code`}
              description={t(
                i18n,
              )`Create your exclusive Calvero ID. Letters, numbers, and underscores only.`}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormInput
                control={form.control}
                name="name"
                label={t(i18n)`Name`}
                placeholder={t(i18n)`Name`}
                description={t(
                  i18n,
                )`Your first name, exactly as it appears on official records.`}
              />
              <FormInput
                control={form.control}
                name="surname"
                label={t(i18n)`Surname`}
                placeholder={t(i18n)`Surname`}
                description={t(
                  i18n,
                )`Family name for identity verification in Calvero's system.`}
              />
            </div>

            <FormInput
              control={form.control}
              name="email"
              label={t(i18n)`Contact Email`}
              placeholder={t(i18n)`Email`}
              description={t(
                i18n,
              )`Used to verify your identity and receive Calvero exclusives.`}
              type="email"
            />

            <FormInput
              control={form.control}
              name="secureKey"
              label={t(i18n)`Secure Key`}
              placeholder={t(i18n)`Secure Key`}
              description={t(
                i18n,
              )`Minimum 6 characters. This key secures your Calvero identity.`}
              type="password"
            />
            {form.formState.errors.root && (
              <FormMessage>{form.formState.errors.root.message}</FormMessage>
            )}
            <SubmitButton>
              {t(i18n)`Activate Calvero Identity`}{' '}
              <ChevronRightIcon className="w-4 h-4" />
            </SubmitButton>

            <FormCheckbox
              control={form.control}
              name="terms"
              label={t(i18n)`I agree to the terms and conditions`}
              id="terms"
            />
          </FormSection>
        </form>
      </Form>

      <FormNavigation
        signupText={t(i18n)`Already part of Calvero?`}
        signupLinkText={t(i18n)`Sign In`}
        signupHref="/login"
        backIcon={<ArrowLeftIcon className="w-4 h-4" />}
      />
    </div>
  );
}
