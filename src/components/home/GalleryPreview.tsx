import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';

export function GalleryPreview() {
  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        <SectionHeading
          title="Project Gallery"
          subtitle="A showcase of precision engineering and successful installations across our client base."
          alignment="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <ImagePlaceholder aspectRatio="square" className="h-full rounded-2xl" text="Project Alpha" />
          </div>
          <div>
            <ImagePlaceholder aspectRatio="square" className="rounded-2xl" text="Installation" />
          </div>
          <div>
            <ImagePlaceholder aspectRatio="square" className="rounded-2xl" text="Precision Cut" />
          </div>
          <div className="col-span-2">
            <ImagePlaceholder aspectRatio="video" className="rounded-2xl" text="Machine Setup" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
