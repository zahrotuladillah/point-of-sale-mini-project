

export default function DetailProduct(){
    return(
        <div className="mt-4">
            <div className="text-xl md:text-3xl mb-2">About This Item</div>
            <hr/>
            <div className="flex flex-col space-y-4 mt-2">
                <div>
                    <div className="text-lg md:text-2xl mb-2">Summary</div>
                    <div className="text-sm md:text-base">A short cardigan that can be worn like a jacket. The material is used to weave to create a sense of unevenness on the surface. Because it is knit and stretchy, it is comfortable to wear. Casual styling with a T-shirt or denim pants is recommended. Of course, it goes well with beautiful styling.</div>
                </div>
                <hr/>
                <div>
                    <div className="text-lg md:text-2xl mb-2">Product Details</div>
                    <div className="text-justify flex flex-col space-y-2 text-sm md:text-base">
                        Item Number: 347891
                        <br/>
                        This product may have a different item number on the tag, even if it is the same product. Thank you for your understanding.
                        <article>
                            <div className="font-bold mb-2">material</div>
                            <div>77% acrylic, 22% polyester, 1% nylon</div>
                        </article>
                        <article>
                            <div className="font-bold mb-2">specification</div>
                            <div>Front center button fastening, button × 4, pockets: chest × 2 (left and right, with buttons)</div>
                        </article>
                        <article>
                            <div className="font-bold mb-2">handling</div>
                            <div>Dark colors may fade, so please avoid washing with other items (especially white and light colors). Please use a detergent that does not contain optical brighteners for the formation and light color. Avoid immersion in water for long periods of time. After washing, shape it immediately and dry it flat in the shade. Please avoid using the dryer after washing with water. Squeeze weakly. Please iron while rubbing with steam. Due to the characteristics of the material, this product is prone to pilling. Thank you for your understanding. Due to the nature of this product, it is easy to get caught, so please be careful when putting on and taking off and when accessories.</div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}