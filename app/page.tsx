import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { ProblemsAlt } from '@/components/ProblemsAlt'
import { ProblemsCost } from '@/components/ProblemsCost'
import { BridgeAlt3 } from '@/components/BridgeAlt3'
import { ResultsBand } from '@/components/ResultsBand'
import { CaseStudies } from '@/components/CaseStudies'
import { SolutionAlt } from '@/components/SolutionAlt'
import { ProcessAlt } from '@/components/ProcessAlt'
import { TeamAlt } from '@/components/TeamAlt'

import { Packages } from '@/components/Packages'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemsAlt />
        <ProblemsCost />
        <BridgeAlt3 />
        <ResultsBand />
        <CaseStudies />
        <SolutionAlt />
        <ProcessAlt />
        <TeamAlt />
        <Packages />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
