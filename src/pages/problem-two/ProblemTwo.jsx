import SimpleCard from '../../components/simple-card/SimpleCard';

export default function ProblemTwoPage() {
    const text = `After first seeing the trailer for 'Sandman' on Netflix. I went and bought the books that cover the original comic book series (4 volumes). I am currently
        reading through the 2nd book but I would recommend it to anyone that loves world building. The writing is fantastic, the character development is believable, and the art brings it all to life.`;
    return (
        <div className='main-content'>
            <SimpleCard text={text} />
        </div>
      );
}