import { getI18n } from '@/locales/index.server';
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const blogPosts = PlaceHolderImages.filter(img => img.id.includes('blog-post')).slice(0, 3);

export default async function Home() {
  const t = await getI18n();

  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: t('features.items.chapterGenerator.title'),
      description: t('features.items.chapterGenerator.description'),
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: t('features.items.literaryStyler.title'),
      description: t('features.items.literaryStyler.description'),
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: t('features.items.aiCoverGenerator.title'),
      description: t('features.items.aiCoverGenerator.description'),
    },
    {
      icon: <CheckCheck className="h-8 w-8 text-primary" />,
      title: t('features.items.consistencyAnalyzer.title'),
      description: t('features.items.consistencyAnalyzer.description'),
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: t('features.items.ideaOrganizer.title'),
      description: t('features.items.ideaOrganizer.description'),
    },
  ];

  const missions = [
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: t('missions.items.creation.title'),
      description: t('missions.items.creation.description'),
    },
    {
      icon: <Gem className="h-8 w-8 text-primary" />,
      title: t('missions.items.engagement.title'),
      description: t('missions.items.engagement.description'),
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: t('missions.items.competition.title'),
      description: t('missions.items.competition.description'),
    },
  ];

  const libraryResources = [
    {
      icon: <Library className="h-8 w-8 text-primary" />,
      title: t('library.items.scriptAnalysis.title'),
      description: t('library.items.scriptAnalysis.description'),
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: t('library.items.writingGuides.title'),
      description: t('library.items.writingGuides.description'),
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: t('library.items.industryArticles.title'),
      description: t('library.items.industryArticles.description'),
    },
  ];

  const plans = [
    {
      name: t('plans.free.name'),
      price: '$0',
      credits: t('plans.free.credits'),
      popular: false,
    },
    {
      name: t('plans.pro.name'),
      price: '$9',
      credits: t('plans.pro.credits'),
      popular: false,
    },
    {
      name: t('plans.premium.name'),
      price: '$19',
      credits: t('plans.premium.credits'),
      popular: true,
    },
    {
      name: t('plans.master.name'),
      price: '$39',
      credits: t('plans.master.credits'),
      popular: false,
    },
    {
      name: t('plans.enterprise.name'),
      price: t('plans.enterprise.price'),
      credits: t('plans.enterprise.credits'),
      popular: false,
    },
    {
      name: t('plans.enterpriseVip.name'),
      price: t('plans.enterpriseVip.price'),
      credits: t('plans.enterpriseVip.credits'),
      popular: false,
    },
  ];

  const securityFeatures = [
      {
          icon: <ShieldCheck className="h-8 w-8 text-primary" />,
          title: t('security.items.smartProtection.title'),
          description: t('security.items.smartProtection.description')
      },
      {
          icon: <BookOpen className="h-8 w-8 text-primary" />,
          title: t('security.items.automatedContracts.title'),
          description: t('security.items.automatedContracts.description')
      },
      {
          icon: <ShieldCheck className="h-8 w-8 text-primary" />,
          title: t('security.items.secureBackup.title'),
          description: t('security.items.secureBackup.description')
      },
      {
          icon: <Award className="h-8 w-8 text-primary" />,
          title: t('security.items.officialRegistration.title'),
          description: t('security.items.officialRegistration.description')
      }
  ]

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
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t('hero.subtitle')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="shadow-[0_0_10px_theme(colors.primary.DEFAULT),_0_0_20px_theme(colors.primary.DEFAULT)]">
                <Link href="/register">{t('hero.cta.primary')}</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#features">{t('hero.cta.secondary')} &rarr;</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t('features.title')}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t('features.subtitle')}
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
                {t('missions.title')}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t('missions.subtitle')}
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
                {t('library.title')}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t('library.subtitle')}
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
                            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{t('education.title')}</h2>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">{t('education.subtitle')}</p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-foreground"><School className="absolute left-1 top-1 h-5 w-5 text-primary" />{t('education.items.dashboard.title')}</dt>
                                    <dd className="inline">{t('education.items.dashboard.description')}</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-foreground"><ShieldCheck className="absolute left-1 top-1 h-5 w-5 text-primary" />{t('education.items.controlledEnv.title')}</dt>
                                    <dd className="inline">{t('education.items.controlledEnv.description')}</dd>
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
              {t('contest.title')}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              {t('contest.subtitle')}
            </p>
            <Button size="lg" className="mt-10">{t('contest.cta')}</Button>
          </div>
        </section>

        <section id="pricing" className="bg-card py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t('pricing.title')}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t('pricing.subtitle')}
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
              {plans.map((plan) => (
                <Card key={plan.name} className={cn("relative flex flex-col", plan.popular && "border-primary shadow-lg")}>
                  {plan.popular && (
                    <Badge variant="default" className="absolute -top-4 left-1/2 -translate-x-1/2">
                      {t('pricing.mostPopular')}
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-4xl font-bold text-foreground">{plan.price}<span className="text-sm font-normal text-muted-foreground">/month</span></CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between">
                    <p className="text-center text-muted-foreground">{plan.credits}</p>
                    <Button className="mt-6 w-full" variant={plan.popular ? 'default' : 'secondary'}>
                      {t('header.get-started')}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="security" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t('security.title')}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t('security.subtitle')}
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
                {t('blog.title')}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t('blog.subtitle')}
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {blogPosts.map((post, index) => (
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
                        {t('blog.posts.date')}
                      </time>
                      <a
                        href="#"
                        className="relative z-10 rounded-full bg-secondary px-3 py-1.5 font-medium text-secondary-foreground hover:bg-secondary/80"
                      >
                        {t('blog.posts.category')}
                      </a>
                    </div>
                    <div className="group relative">
                      <h3 className="font-headline mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-muted-foreground">
                        <a href="#">
                          <span className="absolute inset-0" />
                          {t(`blog.posts.post${index + 1}.title` as any)}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                        {t(`blog.posts.post${index + 1}.description` as any)}
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
