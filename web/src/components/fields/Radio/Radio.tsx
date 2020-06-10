/**
 * Panther is a Cloud-Native SIEM for the Modern Security Team.
 * Copyright (C) 2020 Panther Labs Inc
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';
import { FormError, Radio, RadioProps } from 'pouncejs';
import { FieldConfig, useField } from 'formik';

const FormikRadio: React.FC<RadioProps & Required<Pick<FieldConfig, 'name' | 'value'>>> = props => {
  const [field, meta] = useField(props.name);

  const isInvalid = meta.touched && !!meta.error;
  const errorElementId = isInvalid ? `${props.name}-error` : undefined;
  return (
    <React.Fragment>
      <Radio
        {...props}
        checked={field.value}
        invalid={isInvalid}
        aria-describedby={errorElementId}
      />
      {isInvalid && <FormError id={errorElementId}>{meta.error}</FormError>}
    </React.Fragment>
  );
};

export default FormikRadio;
