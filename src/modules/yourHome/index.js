import React from "react"
import YourHomeHeader from "./yourHomeHeader"
import YouEarn from "./youEarn"
import SetUp from "./setUp"
import AirCover from "./airCover"
import YourQuestions from "./yourQuestions"
import StillQuestions from "./stillQuestions"
import YourHomeFooter from "./yourHomeFooter"
import YourHeaderBottom from "./yourHeaderBottom"

export default function YourHome() {
    return (
        <>
            <YourHomeHeader />
            <YouEarn />
            <SetUp />
            <AirCover />
            <YourQuestions />
            <StillQuestions />
            <YourHomeFooter />
            <YourHeaderBottom />
        </>
    )
}
