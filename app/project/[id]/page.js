'use client'

import ProjectDetails from '../../components/ProjectDetails'

export default function ProjectPage({ params }) {
  return (
    <>
      <ProjectDetails id={params.id} />
      <footer>
        <center>
          <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center dark:border-gray-600" />
          <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#" className="hover:underline">
              Portfolio™
            </a>
            . All Rights Reserved.
          </span>
        </center>
      </footer>
    </>
  )
}