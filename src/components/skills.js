export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#3B6790] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Keahlian</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            <ul className="list-disc list-inside">
              <li>JavaScript, Python, PHP</li>
              <li>
                React JS, Node JS, Express JS, Bootstrap, Tailwind CSS, Flask
              </li>
              <li>MySQL, MongoDB</li>
              <li>OOP, RESTful API, Git, CI/CD Pipelines</li>
              <li>Data Visualization, Machine Learning</li>
              <li>Docker, Postman, VS Code</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
            <ul className="list-disc list-inside">
              <li>Fasih berbahasa Inggris (Tingkat Lanjut)</li>
              <li>Kerja tim dan kolaborasi yang kuat dalam lingkungan Agile</li>
              <li>Komunikasi dan pemecahan masalah yang efektif</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
