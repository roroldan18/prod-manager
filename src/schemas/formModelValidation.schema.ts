import * as Yup from 'yup';


export const formSchema = Yup.object().shape({
  SKU: Yup.string()
    .min(5, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Please, provide the data of indicated type'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please, provide the data of indicated type'),
  price: Yup.number()
    .min(1, 'Please, provide the data of indicated type')
    .required('Please, provide the data of indicated type'),
  type: Yup.string()
    .required('Please, provide the data of indicated type'),
  attributes: Yup.array()
    .when("type", {
      is: "Book",
      then: Yup.array().of(
        Yup.object().shape({  
          weight: Yup.number() 
          .required("Please, provide the data of indicated type")
          .min(1, 'Insert a weight')
        })
      )
    })
    .when("type", {
      is: "DVD-disc",
      then: Yup.array().of(
        Yup.object().shape({  
          size: Yup.number()
            .required("Please, provide the data of indicated type")
            .min(1, 'Insert a size')
          })
      )
    })
    .when("type", {
      is: "Furniture",
      then: Yup.array().of(
        Yup.object().shape({  
          length: Yup.number() 
              .required("Please, provide the data of indicated type")
              .min(15, 'Insert a length'),
          width: Yup.number() 
                .required("Please, provide the data of indicated type")
                .min(15, 'Insert a width'),
          height: Yup.number() 
                .required("Please, provide the data of indicated type")
                .min(15, 'Insert a height')
          })
      )
    })
});