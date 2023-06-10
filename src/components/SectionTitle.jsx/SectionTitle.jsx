const SectionTitle = ({heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-16">
            <hr/>
            <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
            <hr/>
        </div>
    );
};

export default SectionTitle;