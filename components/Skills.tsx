'use client'

const skills = {
  Frontend: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'NestJS', 'Prisma', 'PostgreSQL'],
  Mobile: ['React Native', 'Expo', 'Push Notifications', 'GPS Tracking'],
  Tools: ['Git', 'REST APIs', 'Flutterwave', 'Twilio', 'Socket.io'],
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-4 text-blue-600">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}