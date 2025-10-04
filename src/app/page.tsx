import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  BookOpen,
  CheckCheck,
  Gem,
  HeartHandshake,
  Library,
  Lightbulb,
  Palette,
  School,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'Chapter Generator',
    description:
      "Generates complete chapter drafts while maintaining the author's style.",
    genAi: true,
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: 'Literary Styler',
    description: 'Adjusts the tone and narrative style of the text.',
    genAi: true,
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'AI Cover Generator',
    description:
      'Generates book covers with automatic calculation of spine and ISBN.',
    genAi: true,
  },
  {
    icon: <CheckCheck className="h-8 w-8 text-primary" />,
    title: 'Consistency Analyzer',
    description: 'Identifies plot holes and inconsistencies.',
    genAi: true,
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Idea Organizer',
    description: 'Transforms scattered notes into structured projects.',
    genAi: true,
  },
];

const missions = [
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Creation Missions',
    description: 'Earn credits by completing and publishing projects.',
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: 'Engagement Missions',
    description: 'Get 50% of your credits back for every 10 tool uses.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Competition Missions',
    description: 'Participate in creative challenges with prizes.',
  },
];

const libraryResources = [
  {
    icon: <Library className="h-8 w-8 text-primary" />,
    title: 'Script Analysis',
    description: 'In-depth analysis of successful movie scripts.',
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'Writing Guides',
    description: 'Practical guides to improve your writing techniques.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'Industry Articles',
    description: 'Stay updated with the latest trends in the publishing market.',
  },
];

const plans = [
  { name: 'Free', price: '$0', credits: '500 credits/month' },
  { name: 'Pro', price: '$9', credits: '5,000 credits/month' },
  { name: 'Premium', price: '$19', credits: '15,000 credits/month' },
  { name: 'Master', price: '$39', credits: 'Unlimited credits' },
  { name: 'Enterprise', price: 'Custom', credits: 'Custom solutions' },
  { name: 'Enterprise VIP', price: 'Custom', credits: 'Complete premium services' },
];

const securityFeatures = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: 'Smart Protection',
        description: 'Originality analysis and timestamping for your work.'
    },
    {
        icon: <BookOpen className="h-8 w-8 text-primary" />,
        title: 'Automated Contracts',
        description: 'Literary and script contract templates.'
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: 'Secure Backup',
        description: 'Automatic encryption and versioning.'
    },
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: 'Official Registration',
        description: 'Integration with recognized registration agencies.'
    }
]

const blogPosts = PlaceHolderImages.filter(img => img.id.includes('blog-post')).slice(0, 3);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section
          id="hero"
          className="relative overflow-hidden bg-background py-20 sm:py-32"
        >
          <div className="absolute inset-0 bg-grid-slate-700/[0.04] bg-[10px_10px] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-200/[0.04]"></div>
          <div className="container relative mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Bring Your Story to Life with the <br /> Power of{' '}
              <span className="text-primary">Artificial Intelligence.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The definitive platform for writers, screenwriters, and comic book
              artists.
              <br />
              A space where text and art unite, driven by intelligent tools,
              dynamic collaboration, and full support to turn ideas into
              unforgettable works.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="shadow-[0_0_10px_theme(colors.primary.DEFAULT),_0_0_20px_theme(colors.primary.DEFAULT)]">
                <Link href="/register">Start a Free Project</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#features">View Features &rarr;</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Core Functionalities
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                All the tools you need to take your story from concept to
                completion.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {feature.icon}
                    <CardTitle className="font-headline m-0">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="missions" className="bg-card py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Missions and Rewards
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Stay motivated and earn rewards as you create.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {missions.map((mission) => (
                <div key={mission.title} className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                    {mission.icon}
                  </div>
                  <h3 className="font-headline mt-4 text-xl font-semibold">{mission.title}</h3>
                  <p className="mt-2 text-muted-foreground">{mission.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="library" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Study Library
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Resources to hone your literary and cinematic skills.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {libraryResources.map((resource) => (
                <Card key={resource.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {resource.icon}
                    <CardTitle className="font-headline m-0">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{resource.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="education" className="bg-card py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">CineWrite for Education</h2>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">A safe and professional environment for educational institutions to cultivate the next generation of storytellers.</p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-foreground"><School className="absolute left-1 top-1 h-5 w-5 text-primary" />Teacher Dashboard.</dt>
                                    <dd className="inline"> Manage classes, students, and credits with ease.</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-foreground"><ShieldCheck className="absolute left-1 top-1 h-5 w-5 text-primary" />Controlled Environment.</dt>
                                    <dd className="inline"> Secure access through institutional domain control.</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="sm:px-6 lg:px-0">
                        <div className="relative isolate overflow-hidden rounded-xl bg-secondary px-6 pt-8 shadow-2xl sm:mx-auto sm:max-w-2xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                            <div className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-secondary-foreground/10 opacity-20 ring-1 ring-inset ring-white/5"></div>
                            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                <Image
                                    src="https://picsum.photos/seed/education/2432/1442"
                                    alt="Product screenshot"
                                    data-ai-hint="classroom students"
                                    width={2432}
                                    height={1442}
                                    className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contest" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Annual CineWrite X AI Contest
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              An international event for new writers and screenwriters. A hybrid
              evaluation (AI + guest judges) with cash prizes, publishing and
              production contracts, and professional visibility.
            </p>
            <Button size="lg" className="mt-10">Learn More</Button>
          </div>
        </section>

        <section id="pricing" className="bg-card py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Plans and Subscriptions
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Choose the perfect plan to unleash your creativity.
              </p>
            </div>
            <div className="mt-16 overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4 font-headline text-lg">Plan</TableHead>
                    <TableHead className="w-1/4 font-headline text-lg">Value</TableHead>
                    <TableHead className="w-1/2 font-headline text-lg">Benefits</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {plans.map((plan) => (
                    <TableRow key={plan.name}>
                      <TableCell className="font-medium">{plan.name}</TableCell>
                      <TableCell>{plan.price}</TableCell>
                      <TableCell>{plan.credits}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        <section id="security" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Security and Protection
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Your creations are safe with us.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                    {feature.icon}
                  </div>
                  <h3 className="font-headline mt-4 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="bg-card py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                From Our Blog
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                News, articles, and interviews on writing, screenwriting, and the
                creative market.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col items-start justify-between"
                >
                  <div className="relative w-full">
                    <Image
                      src={post.imageUrl}
                      alt={post.description}
                      data-ai-hint={post.imageHint}
                      width={400}
                      height={300}
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time dateTime="2024-05-15" className="text-muted-foreground">
                        May 15, 2024
                      </time>
                      <a
                        href="#"
                        className="relative z-10 rounded-full bg-secondary px-3 py-1.5 font-medium text-secondary-foreground hover:bg-secondary/80"
                      >
                        Industry News
                      </a>
                    </div>
                    <div className="group relative">
                      <h3 className="font-headline mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-muted-foreground">
                        <a href="#">
                          <span className="absolute inset-0" />
                          The Rise of AI in Creative Writing
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                        Exploring how artificial intelligence is changing the
                        landscape for authors and screenwriters.
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
