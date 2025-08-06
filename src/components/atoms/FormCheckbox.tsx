import { Control } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

interface FormCheckboxProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label: string;
  id?: string;
  className?: string;
}

export default function FormCheckbox({
  control,
  name,
  label,
  id = 'checkbox',
  className,
}: FormCheckboxProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormControl>
            <div className="flex items-center gap-2">
              <Checkbox
                id={id}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <Label htmlFor={id}>{label}</Label>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
