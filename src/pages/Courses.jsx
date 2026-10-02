import React from 'react'
import OurCoursesHero from "./OurCoursesHero";
import CoursesCardsSection from "./CoursesCardsSection";
import CoursesStatsSection from "./CoursesStatsSection";
import OurCourses from './OurCoruses';
const Courses = () => {
    return (
        <>
            <OurCoursesHero />
            <OurCourses />
            <CoursesCardsSection />
            <CoursesStatsSection />
        </>
    )
}

export default Courses;