import React, { FC } from 'react';

import { Input, AutoComplete } from 'antd';

import Ellipsis from 'ant-design-pro/lib/Ellipsis';

type contentTypes = {
  title: Array<string>;
  data: Array<any>;
};

type Props = {
  content: contentTypes;
  handleChange: any;
  keyValue: string;
};

const AutoCompleteCustom: FC<Props> = (props: Props) => {
  const { content, keyValue, handleChange } = props;

  const { title, data } = content;

  const renderTitle = (
    <div
      style={{
        paddingLeft: 12,
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      {title.map((item: string) => (
        <div style={{ textAlign: 'center', minWidth: 100 }}>
          <Ellipsis length={12} tooltip>
            {item}
          </Ellipsis>
        </div>
      ))}
    </div>
  );

  const renderItem = data.map((item: any) => ({
    value: item[keyValue],
    label: (
      <div
        style={{ display: 'flex', justifyContent: 'space-around' }}
        onClick={() => {
          handleChange(item[keyValue]);
        }}
      >
        {Object.values(item).map((value: any) => (
          <div style={{ textAlign: 'center', minWidth: 100 }}>
            <Ellipsis length={12} tooltip>
              {value}
            </Ellipsis>
          </div>
        ))}
      </div>
    ),
  }));

  const options = [
    {
      label: renderTitle,
      options: renderItem,
    },
  ];

  return (
    <AutoComplete dropdownMatchSelectWidth={title.length * 130} style={{ width: 250 }} options={options}>
      <Input onChange={(event: any) => handleChange(event.target.value)} />
    </AutoComplete>
  );
};

export default AutoCompleteCustom;
