import React from 'react'
import {IntlProvider} from 'react-intl';
import JobsList from "./components/jobslist";
import esM from "./locales/es";
import enM from "./locales/en";

const Intl = () => {
    var lang = navigator.language.split(/[-_]/)[0] || navigator.userLanguage.split(/[-_]/)[0];
    let esL= "es"
    return (
    <div>
    <IntlProvider locale={lang} messages={{es:esM, en:enM }[lang]}>
		<JobsList lang={lang}/>
	</IntlProvider>
    </div>
    )
}

export default Intl
