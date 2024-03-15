import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function AddProduct() {
    const navigate = useNavigate()
    const schema = yup.object().shape({
        category: yup
            .string()
            .oneOf(["best seller", "autumn", "winter", "daily"])
            .required("Category is required"),
        name: yup.string().required("Field Name is required"),
        price: yup.number().positive().required("Price is required"),
        description: yup.string(),
        dataPrev: yup.array().of(
            yup.object().shape({
                dataPreview : yup.string().url().required('Image link is required'),
                color : yup.string().required('Color name is required'),
            })
        ).min(1, 'At least one image link is required'),
        dataColor: yup.array().of(
            yup.object().shape({
                colorName: yup.string().required('Color name is required'),
                hexCode: yup.string().matches(/^#[0-9A-Fa-f]{6}$/, 'Invalid hex code').required('Hex code is required'),
            })
        ),
        dataSize: yup.array().of(yup.string()).min(1).required('At least one size is required'),
    });
    
    const [defaultValues, setDefaultVal] = useState({
        name: '',
        dataPrev: [{dataPreview: '', color: ''}],
        price: '',
        category: '',
        dataColor: [{ colorName: '', hexCode: '' }],
        dataSize: [],
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    });

    const { fields:color, append:appendColor, remove:removeColor } = useFieldArray({
        control,
        name: 'dataColor',
    });

    const { fields:image, append:appendImage, remove:removeImage } = useFieldArray({
        control,
        name: 'dataPrev',
    });

    const onSubmitForm = (data) => {
        console.log("submit ",data);

        const payload = {
            category: data.category,
            name: data.name,
            price: data.price,
            description: data.description,
            dataPrev: data.dataPrev,
            dataSize: data.dataSize,
            dataColor: data.dataColor,
        };

        axios
            .post("http://localhost:3000/product", payload)
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Data added!",
                    icon: "success"
                });
                reset();
            })
            .catch((error) => console.log(error));
        navigate("/productlist")
    };

    return (
        <section className="content z-0 my-[4vh] max-w-[80%] m-auto flex flex-col gap-[4vh] sm:gap-[3vh] sm:my-[3vh]">
            <h1 className="text-3xl font-semibold">Add Product</h1>
            <form
                className="flex flex-col gap-4 mt-4"
                onSubmit={handleSubmit(onSubmitForm)}
            >
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        placeholder="Name"
                        className="w-full rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
                        {...register("name")}
                        id="name"
                    />
                    <p className="error text-red-500">{errors.name?.message}</p>
                </div>

                <div>
                    <p>Image</p>
                    {image.map((image, index) => (
                        <div key={image.id} className="flex gap-4 mb-2">
                            <input
                                className="w-[35%] rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
                                {...register(`dataPrev.${index}.dataPreview`)}
                                placeholder="Image Link"
                            />
                            <input
                                className="rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
                                {...register(`dataPrev.${index}.color`)}
                                placeholder="Color"
                            />
                            <button className="rounded-lg bg-red-400 p-2 text-white self-center hover:bg-red-600" type="button" onClick={() => removeImage(index)}>
                                Remove
                            </button>
                            {errors.dataPrev && errors.dataPrev[index] && (
                                <div>
                                {errors.dataPrev[index].dataPreview && (
                                    <p className="error text-red-500">{errors.dataPrev[index].dataPreview.message}</p>
                                )}
                                {errors.dataPrev[index].color && (
                                    <p className="error text-red-500">{errors.dataPrev[index].color.message}</p>
                                )}
                                </div>
                            )}
                        </div>
                    ))}
                    <button type="button" className="rounded-lg bg-first hover:bg-yellow-600 p-2 mt-4 text-white self-center" onClick={() => appendImage({ dataPreview: '', color: '' })}>Add Image</button>
                    <p className="error text-red-500">{errors.dataPrev?.message}</p>
                </div>

                <div>
                    <label htmlFor="category">Category</label>
                    <select
                        placeholder="Category"
                        className="p-4 pe-12 w-full rounded-lg border-[1px] border-gray-400 text-gray-700 sm:text-sm"
                        {...register("category")}
                        id="category"
                    >
                        <option value="">Please select</option>
                        <option value="best seller">Best Seller</option>
                        <option value="autumn">Autumn</option>
                        <option value="winter">Winter</option>
                        <option value="daily">Daily</option>
                    </select>
                    <p className="error text-red-500">{errors.category?.message}</p>
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        placeholder="Price"
                        className="w-full rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
                        {...register("price")}
                        id="price"
                    />
                    <p className="error text-red-500">{errors.price?.message}</p>
                </div>

                <div>
                    <p>Color</p>
                    {color.map((color, index) => (
                        <div key={color.id} className="flex gap-4 mb-2">
                            <input
                                className="rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
                                {...register(`dataColor.${index}.colorName`)}
                                placeholder="Color Name"
                            />
                            <input
                                className="rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
                                {...register(`dataColor.${index}.hexCode`)}
                                placeholder="Hex Code"
                            />
                            <button className="rounded-lg bg-red-400 p-2 text-white self-center hover:bg-red-600" type="button" onClick={() => removeColor(index)}>
                                Remove
                            </button>
                            {errors.dataColor && errors.dataColor[index] && (
                                <div>
                                {errors.dataColor[index].colorName && (
                                    <p className="error text-red-500">{errors.dataColor[index].colorName.message}</p>
                                )}
                                {errors.dataColor[index].hexCode && (
                                    <p className="error text-red-500">{errors.dataColor[index].hexCode.message}</p>
                                )}
                                </div>
                            )}
                        </div>
                    ))}
                    <button type="button" className="rounded-lg bg-first p-2 mt-4 hover:bg-yellow-600 text-white self-center" onClick={() => appendColor({ colorName: '', hexCode: '' })}>Add Color</button>
                </div>

                <div>
                <p>Size</p>
                    <div className="flex gap-4">
                        <label className="flex gap-2">
                            <input className="w-5 h-5" type="checkbox" {...register('dataSize')} value="S" />
                            S
                        </label>
                        <label className="flex gap-2">
                            <input className="w-5 h-5"  type="checkbox" {...register('dataSize')} value="M" />
                            M
                        </label>
                        <label className="flex gap-2">
                            <input className="w-5 h-5"  type="checkbox" {...register('dataSize')} value="L" />
                            L
                        </label>
                        <label className="flex gap-2">
                            <input className="w-5 h-5"  type="checkbox" {...register('dataSize')} value="L" />
                            XL
                        </label>
                    </div>
                    {errors.dataSize && <p className="error text-red-500">{errors.dataSize.message}</p>}
                </div>

                <div>
                    <label htmlFor="desc">Description</label>
                    <textarea
                        placeholder="Description"
                        className="w-full rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
                        {...register("description")}
                        id="desc"
                    />
                </div>

                <button
                    className="mt-4 rounded-lg bg-first p-3 text-xl font-bold hover:bg-yellow-600 text-white self-center w-full"
                    type="submit"
                    >
                    Submit
                </button>
            </form>
        </section>
    );
}

export default AddProduct;
