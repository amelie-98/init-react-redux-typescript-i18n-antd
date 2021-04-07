import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import Wrapper from './test.styled';

import Table from './module/table';

interface Iprops {
  text: String;
}

const Test: React.FC<Iprops> = (props: Iprops) => {
  const { text } = props;

  const { t: translate, i18n } = useTranslation();

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <Wrapper>
      {text}
      <button type="button" onClick={() => changeLanguage('de')}>
        de
      </button>
      <button type="button" onClick={() => changeLanguage('en')}>
        en
      </button>

      <Trans i18nKey="title" />
      <div>{translate('description.part1')}</div>
      <div>{translate('description.part2')}</div>

      <Table />
    </Wrapper>
  );
};

export default Test;
