import React from "react"

import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { SwitchLanguage, Container } from './styles';

const languageName = {
  pt: "PT",
  en: "EN",
  es: "ES",
}

const Language = () => {
  return (
    <Container>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <SwitchLanguage
              key={language}
              onClick={() => changeLocale(language)}
              currentLanguage={currentLocale === language}
            >
              {languageName[language]}
            </SwitchLanguage>
          ))
        }
      </IntlContextConsumer>
    </Container>
  )
}

export default Language