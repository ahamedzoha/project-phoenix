import { FC } from 'react'

import { Card } from '@/components/layout/Card'
import { Section } from '@/components/layout/Section'
import SimpleLayout from '@/components/layout/SimpleLayout'

const UsesPage = () => {
  return (
    <SimpleLayout
      title='Software I use, gadgets I love, and other things I recommend.'
      intro='I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive. Here’s a big list of all of my favorite stuff.'
    >
      <div className='space-y-20'>
        <ToolsSection title='Workstation'>
          <Tool title='13” MacBook Pro (2017), 8GB RAM, Intel i5 Processor'>
            This is my portable workstation. Despite being a few years old, it
            still has plenty of power for my coding and browsing needs. I’m not
            a fan of the butterfly keyboard, but I’m not a fan of the new Magic
            Keyboard either. I’m hoping Apple will eventually release a new
            keyboard design that’s not terrible.
          </Tool>
          <Tool title='Custom Built PC with AMD Ryzen 5 3600 Processor, 32GB RAM and RX5600XT GPU'>
            This is my desktop workstation. I built it myself and it’s been
            running great for the past years. Even though I wanted a 2060 for a
            GPU, I couldn’t find one in stock anywhere. I’m hoping to upgrade to
            a 3060 or 3070 soon so that I can finally learn ML and get some
            practice. The 5600XT is (or was) a great card for the price and I
            can run all my favorite games at 1080p with high/ultra settings.
          </Tool>
          <Tool title='1x ViewSonic 32" 2K & 1x Dell 21" 1080p Display Monitors'>
            I have two monitors. One is a 32” 2K monitor that I use for coding
            and the other is a 21” 1080p monitor that I use for browsing docs
            and previewing my code. I am a big fan of the 32” monitor because
            it’s big enough to fit a lot of code on the screen at once, but not
            so big that it’s hard to move my head around.
          </Tool>
          <Tool title='Edifier 1280DBs with a Custom Sobwoofer and amplifier'>
            Who doesn't like a good tune while coding? I have a pair of Edifier
            1280DBs that I use for my main speakers. It's perfect for my setup
            and produces very nice sound on a budget. I also have a custom
            subwoofer and amplifier that I built myself which perfectly fills
            the the slight lack of bass from the speakers themselves.
          </Tool>
          <Tool title='Cougar Puri Cherry Red Mechanical Keyboard'>
            I have a Cougar Puri Mechanical Keyboard with Cherry Red switches
            that I use for coding. I love the tactile feel of mechanical
            keyboards and the Cherry Red switches are perfect for me.
          </Tool>
          <Tool title='Logitech MX Master 3 Mouse'>
            The MX Master 3 is the best mouse I've ever used. It's comfortable
            to use, has a great battery life, and has a ton of features that
            make it a joy to use. It is highly recommended!
          </Tool>
        </ToolsSection>
        <ToolsSection title='Development tools'>
          <Tool title='VS Code'>
            I’ve been using VS Code for years now and I still love it. It’s
            fast, extensible, and has a great community. I love how it
            seamlessly integrates with WSL2 in Windows. I use it for everything
            from writing code to writing this blog!
          </Tool>
          <Tool title='iTerm2 for MacOS'>
            In my opinion, iTerm2 is the best terminal emulator for macOS. It
            has a ton of features and is super customizable. I use it for
            everything from running local development servers to SSHing into
            remote servers.
          </Tool>
          <Tool title='WSL2 and Windows Terminal'>
            As much as I love macOS and linux distros, I still need to use
            Windows for work and playing video games. I use WSL2 and Windows
            Terminal to run my linux development environment within Windows.
            It's a great way to get the best of both worlds.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Design'>
          <Tool title='Figma'>
            Although I'm not much of a designer, I still use Figma for
            prototyping and designing simple UIs. It's a great tool for
            collaborating with other designers and developers.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Productivity'>
          <Tool title='Windows PowerToys'>
            I use Windows PowerToys to customize my Windows experience. I use
            FancyZones to create custom zones on my desktop so that I can easily
            organize my windows. I also use PowerRename to rename multiple files
            at once. I especially love PowerToys Run which allows me to quickly
            launch applications and search for files just like Spotlight on
            macOS.
          </Tool>
          <Tool title='Notion'>
            I use Notion for everything from taking notes to planning my day.
            It's a great tool for organizing my thoughts and keeping track of my
            tasks. I also use it to keep track of my blog posts and ideas for
            future blog posts.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}

interface ToolsSectionProps {
  children: React.ReactNode
  title: string
}
const ToolsSection: FC<ToolsSectionProps> = ({ children, ...props }) => {
  return (
    <Section {...props}>
      <ul role='list' className='space-y-16'>
        {children}
      </ul>
    </Section>
  )
}

interface ToolProps {
  title: string
  href?: string
  children: React.ReactNode
}
const Tool: FC<ToolProps> = ({ title, href, children }) => {
  return (
    <Card as='li'>
      <Card.Title as='h3' href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default UsesPage
