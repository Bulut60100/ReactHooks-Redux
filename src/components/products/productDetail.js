import React from "react";
import SelectInput from "../toolbox/selectInput";
import TextInput from "../toolbox/textInput";

const productDetail = ({ categories, product, onSave, onChange }) => {
    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
            <TextInput name="productName" label="Product Name" value={product.productName} onChange={onChange} error="hata" />
            <SelectInput name="categoryId" label="category" value={product.categoryId || ""} defaultOption="Seçiniz" options={categories.map(category => ({
                value: category.id,
                text: category.categoryName
            }))} onChange={onChange} error="hata" />
            <TextInput name="unitPrice" label="Unit Price" value={product.unitPrice} onChange={onChange} error="hata" />
            <TextInput name="quantityPerUnit" label="quantity Per Unit" value={product.quantityPerUnit} onChange={onChange} error="hata" />
            <TextInput name="unitsInStock" label="units In Stock" value={product.unitsInStock} onChange={onChange} error="hata" />
            <button type="submit" className="btn btn-success">Kaydet</button>
        </form>
    );
};

export default productDetail;