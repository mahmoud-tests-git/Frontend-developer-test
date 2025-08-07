'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { t } from '@lingui/core/macro';
import { redirect } from 'next/navigation';

import { Form } from '../ui/form';
import FormHeader from '../atoms/FormHeader';
import FormInput from '../atoms/FormInput';
import FormCheckbox from '../atoms/FormCheckbox';
import SubmitButton from '../atoms/SubmitButton';
import FormSection from '../molecules/FormSection';
import FormNavigation from '../molecules/FormNavigation';

const idRegex = /^[A-Za-z0-9_]{3,30}$/;

const formSchema = z.object({
  identityCode: z
    .string()
    .trim()
    .refine((v) => {
      if (v.includes('@')) {
        return z.string().email().safeParse(v).success;
      }
      return idRegex.test(v);
    }),
  secureKey: z.string().min(6, 'Secure key must be at least 6 characters'),
  stayLoggedIn: z.boolean(),
});

export default function LoginForm() {
  const { i18n } = useLingui();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identityCode: '',
      secureKey: '',
      stayLoggedIn: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_CALVERO_API_URL}/auth/welcome`,
      {
        method: 'POST',
        body: JSON.stringify({
          identityCode: values.identityCode,
          secureKey: values.secureKey,
          token: '1234567890',
        }),
      },
    );
    if (data.ok) {
      redirect('/');
    } else {
      form.setError('identityCode', {
        message: t(i18n)`Invalid credentials`,
      });
      form.setError('secureKey', {
        message: t(i18n)`Invalid credentials`,
      });
    }
  }

  return (
    <div className="w-full p-8 mx-auto flex flex-col gap-4">
      <FormHeader
        title={t(i18n)`Welcome Back to Calvero`}
        description={t(
          i18n,
        )`Sign in to your Calvero ID and return to where you belong — among the bold.`}
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mx-auto">
          <FormSection>
            <FormInput
              control={form.control}
              name="identityCode"
              label={t(i18n)`Identity Code`}
              placeholder={t(i18n)`Identity Code`}
              description={t(i18n)`Enter your Calvero ID, email, or username.`}
            />

            <FormInput
              control={form.control}
              name="secureKey"
              label={t(i18n)`Secure Key`}
              placeholder={t(i18n)`Secure Key`}
              description={t(
                i18n,
              )`Your private secure key. Minimum 6 characters.`}
              type="password"
            />

            <SubmitButton>
              {t(i18n)`Enter Calvero`} <ChevronRightIcon className="w-4 h-4" />
            </SubmitButton>

            <FormCheckbox
              control={form.control}
              name="stayLoggedIn"
              label={t(i18n)`Stay logged in`}
              id="stayLoggedIn"
            />
          </FormSection>
        </form>
      </Form>

      <FormNavigation
        signupText={t(i18n)`New to Calvero?`}
        signupLinkText={t(i18n)`Create Your Calvero ID`}
        signupHref="/register"
        backIcon={<ArrowLeftIcon className="w-4 h-4" />}
      />
    </div>
  );
}
