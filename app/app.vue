<template>
  <div class="min-h-screen bg-background p-8">
    <div class="max-w-4xl mx-auto space-y-8">
      <div class="flex items-start justify-between">
        <div>
          <h1 class="text-4xl font-bold mb-2">shadcn Button Examples</h1>
          <p class="text-muted-foreground">Standard button variants and sizes</p>
        </div>
        <ModeToggle />
      </div>

      <div class="space-y-6">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Variants</h2>
          <div class="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Sizes</h2>
          <div class="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Disabled</h2>
          <div class="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button variant="secondary" disabled>Disabled Secondary</Button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
