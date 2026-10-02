const CoursesPreview = () =>{
  const courses = ["Full Stack", "Frontend", "Backend", "UI/UX"];

  return (
    <section className="py-24 bg-[#f6f7ff]">
      <h2 className="text-center text-4xl font-extrabold mb-14">
        Popular Courses
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {courses.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-6 shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold text-indigo-600">{c}</h3>
            <p className="mt-3 text-gray-600">
              Industry aligned curriculum with projects.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default CoursesPreview;