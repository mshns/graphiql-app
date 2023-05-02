import { FC } from 'react';
import { IntrospectionField } from 'graphql';
import { isIntrospectionNamedInput } from 'shared';

export const DocumentArgs: FC<{ fieldInfo?: IntrospectionField }> = ({ fieldInfo }) => {
  if (!fieldInfo?.args) {
    return null;
  }

  return (
    <section>
      {fieldInfo?.args.map((arg, i) => (
        <div key={i}>
          <span>{arg.name}: </span>
          <span>{isIntrospectionNamedInput(arg.type) && arg.type.name} </span>
        </div>
      ))}
    </section>
  );
};
