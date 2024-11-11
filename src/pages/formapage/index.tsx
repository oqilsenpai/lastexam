import { FC } from "react";
import {
  useForm,
  FormProvider,
  Controller,
  SubmitHandler,
} from "react-hook-form"; 
import SelectField from "../../components/selects"; 
import ImageUpload from "../../components/imageupload"; 

const FormaPage: FC = () => {
  const methods = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data); 
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-center mb-4 pt-16">
        <h1 className="text-4xl font-semibold">Разместить объявление</h1>
      </div>

      <FormProvider {...methods}>
        <div className="flex mx-auto justify-around container  ">
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="max-w-sm  w-[300px] border-none mt-8"
          >
            <div>
            
              <div className="mb-0 ">
                <SelectField
                  id="country"
                  label="Страна"
                  options={["United States", "Canada", "Australia", "Germany"]}
                  required
                />
              </div>
              <div className="mb-0">
                <SelectField
                  id="region"
                  label="Регион"
                  options={[
                    "California",
                    "Ontario",
                    "New South Wales",
                    "Bavaria",
                  ]}
                  required
                />
              </div>
              <div className="mb-0">
                <SelectField
                  id="city"
                  label="Город"
                  options={["New York", "Toronto", "Sydney", "Munich"]}
                  required
                />
              </div>
              <div className="mb-0">
                <SelectField
                  id="neighborhood"
                  label="Район"
                  options={[
                    "Brooklyn",
                    "Scarborough",
                    "Bondi",
                    "Munich City Center",
                  ]}
                  required
                />
              </div>
              <div className="mb-0">
                <SelectField
                  id="neighborhood"
                  label="Район"
                  options={[
                    "Brooklyn",
                    "Scarborough",
                    "Bondi",
                    "Munich City Center",
                  ]}
                  required
                />
              </div>
              <div className="mb-0">
                <SelectField
                  id="neighborhood"
                  label="Район"
                  options={[
                    "Brooklyn",
                    "Scarborough",
                    "Bondi",
                    "Munich City Center",
                  ]}
                  required
                />
              </div>
              <div className="mb-0">
                <SelectField
                  id="neighborhood"
                  label="Район"
                  options={[
                    "Brooklyn",
                    "Scarborough",
                    "Bondi",
                    "Munich City Center",
                  ]}
                  required
                />
              </div>
             

  
            </div>
         
            <div className="mt-6">
              <h1>Комиссионные *</h1>
              <div className="flex gap-8 mt-4">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <h1>Есть</h1>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <h1>Нет</h1>
                </div>
              </div>
            </div>
          </form>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="max-w-sm w-[300px] border-none mt-8"
          >
            <div>
         
              <div className="mb-6">
                <SelectField
                  id="country"
                  label="Страна"
                  options={["United States", "Canada", "Australia", "Germany"]}
                  required
                />
              </div>

              <div className="mt-6">
                <h1>Обмен</h1>
                <div className="flex gap-8 mt-4">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <h1>Есть</h1>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <h1>Нет</h1>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h1>Рассрочка</h1>
                <div className="flex gap-8 mt-4">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <h1>Есть</h1>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <h1>Нет</h1>
                  </div>
                </div>
              </div>

       
              <div className="mb-6">
                <label
                  htmlFor="prepayment"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Срок рассрочки *
                </label>
                <Controller
                  name="prepayment"
                  control={methods.control}
                  rules={{
                    required: "Предоплата is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers are allowed",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <input
                        {...field}
                        id="prepayment"
                        placeholder="Введите срок рассрочки"
                        type="text"
                        className="bg-gray-200 text-sm rounded-lg  block w-[440px] h-[45px] p-2.5"
                      />
                      {fieldState?.error && (
                        <p className="text-red-500 text-sm">
                          {fieldState?.error?.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="prepayment"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Срок рассрочки *
                </label>
                <Controller
                  name="prepayment"
                  control={methods.control}
                  rules={{
                    required: "Предоплата is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers are allowed",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <input
                        {...field}
                        id="prepayment"
                        placeholder="85%"
                        type="text"
                        className="bg-gray-200 text-sm rounded-lg  block w-[440px] h-[45px] p-2.5"
                      />
                      {fieldState?.error && (
                        <p className="text-red-500 text-sm">
                          {fieldState?.error?.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="prepayment"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Срок рассрочки *
                </label>
                <Controller
                  name="prepayment"
                  control={methods.control}
                  rules={{
                    required: "Предоплата is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers are allowed",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <input
                        {...field}
                        id="prepayment"
                        placeholder="85%"
                        type="text"
                        className="bg-gray-200 text-sm rounded-lg  block w-[440px] h-[45px] p-2.5"
                      />
                      {fieldState?.error && (
                        <p className="text-red-500 text-sm">
                          {fieldState?.error?.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="prepayment"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Срок рассрочки *
                </label>
                <Controller
                  name="prepayment"
                  control={methods.control}
                  rules={{
                    required: "Предоплата is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers are allowed",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <input
                        {...field}
                        id="prepayment"
                        placeholder="85%"
                        type="text"
                        className="bg-gray-200 text-sm rounded-lg  block w-[440px] h-[45px] p-2.5"
                      />
                      {fieldState?.error && (
                        <p className="text-red-500 text-sm">
                          {fieldState?.error?.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="prepayment"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Срок рассрочки *
                </label>
                <Controller
                  name="prepayment"
                  control={methods.control}
                  rules={{
                    required: "Предоплата is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers are allowed",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <input
                        {...field}
                        id="prepayment"
                        placeholder="Описание акции"
                        type="text"
                        className="bg-gray-200 text-sm rounded-lg  block w-[440px] h-[90px] p-2.5"
                      />
                      {fieldState?.error && (
                        <p className="text-red-500 text-sm">
                          {fieldState?.error?.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

     
            </div>
          </form>
        </div>
        <hr className="w-[1110px] container mx-auto" />

        <div className="flex mx-auto justify-around  container ">
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="max-w-sm  w-[300px] border-none mt-8"
          >
            <div>
          
              <div className="mb-0 ">
                <SelectField
                  id="country"
                  label="Страна"
                  options={["United States", "Canada", "Australia", "Germany"]}
                  required
                />
              </div>
              <div className="mb-0">
                <SelectField
                  id="region"
                  label="Регион"
                  options={[
                    "California",
                    "Ontario",
                    "New South Wales",
                    "Bavaria",
                  ]}
                  required
                />
              </div>
              <div className="mb-0">
                <SelectField
                  id="city"
                  label="Город"
                  options={["New York", "Toronto", "Sydney", "Munich"]}
                  required
                />
              </div>
              <div className="mb-0">
                <SelectField
                  id="neighborhood"
                  label="Район"
                  options={[
                    "Brooklyn",
                    "Scarborough",
                    "Bondi",
                    "Munich City Center",
                  ]}
                  required
                />
              </div>
              <div className="mb-0">
                <SelectField
                  id="neighborhood"
                  label="Район"
                  options={[
                    "Brooklyn",
                    "Scarborough",
                    "Bondi",
                    "Munich City Center",
                  ]}
                  required
                />
              </div>
              <div className="mb-0">
                <SelectField
                  id="neighborhood"
                  label="Район"
                  options={[
                    "Brooklyn",
                    "Scarborough",
                    "Bondi",
                    "Munich City Center",
                  ]}
                  required
                />
              </div>
              <div className="mb-0">
                <SelectField
                  id="neighborhood"
                  label="Район"
                  options={[
                    "Brooklyn",
                    "Scarborough",
                    "Bondi",
                    "Munich City Center",
                  ]}
                  required
                />
              </div>
           

      
            </div>
     
            <div className="mt-6">
              <h1>Комиссионные *</h1>
              <div className="flex gap-8 mt-4">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <h1>Есть</h1>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <h1>Нет</h1>
                </div>
              </div>
            </div>

            <button
              className="bg-[#FCA311] w-[300px] h-[45px] rounded-md mx-3 mt-9"
              type="submit"
            >
              Опубликовать
            </button>
          </form>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="max-w-sm w-[300px] border-none mt-8"
          >
            <div>
              <div className="mb-6">
                <label
                  htmlFor="prepayment"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Срок рассрочки *
                </label>
                <Controller
                  name="prepayment"
                  control={methods.control}
                  rules={{
                    required: "Предоплата is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers are allowed",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <input
                        {...field}
                        id="prepayment"
                        placeholder="Введите срок рассрочки"
                        type="text"
                        className="bg-gray-200 text-sm rounded-lg  block w-[440px] h-[45px] p-2.5"
                      />
                      {fieldState?.error && (
                        <p className="text-red-500 text-sm">
                          {fieldState?.error?.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="prepayment"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Срок рассрочки *
                </label>
                <Controller
                  name="prepayment"
                  control={methods.control}
                  rules={{
                    required: "Предоплата is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers are allowed",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <input
                        {...field}
                        id="prepayment"
                        placeholder="85%"
                        type="text"
                        className="bg-gray-200 text-sm rounded-lg  block w-[440px] h-[45px] p-2.5"
                      />
                      {fieldState?.error && (
                        <p className="text-red-500 text-sm">
                          {fieldState?.error?.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="prepayment"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Срок рассрочки *
                </label>
                <Controller
                  name="prepayment"
                  control={methods.control}
                  rules={{
                    required: "Предоплата is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers are allowed",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <input
                        {...field}
                        id="prepayment"
                        placeholder="85%"
                        type="text"
                        className="bg-gray-200 text-sm rounded-lg  block w-[440px] h-[45px] p-2.5"
                      />
                      {fieldState?.error && (
                        <p className="text-red-500 text-sm">
                          {fieldState?.error?.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="mt-6">
                <h1>Обмен</h1>
                <div className="flex gap-8 mt-4">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <h1>Есть</h1>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <h1>Нет</h1>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="prepayment"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Срок рассрочки *
                </label>
                <Controller
                  name="prepayment"
                  control={methods.control}
                  rules={{
                    required: "Предоплата is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers are allowed",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <input
                        {...field}
                        id="prepayment"
                        placeholder="Введите текст"
                        type="text"
                        className="bg-gray-200 text-sm rounded-lg  block w-[440px] h-[140px] p-2.5"
                      />
                      {fieldState?.error && (
                        <p className="text-red-500 text-sm">
                          {fieldState?.error?.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

    
            </div>
          </form>
        </div>
      </FormProvider>

      <div>

        <div>
          <h1 className="w-full text-center mt-9">Загрузить фотографии</h1>
          <div className="w-full mx-auto">
            <ImageUpload />
          </div>
        </div>

 
        <div>
          <button className="bg-[#FCA311] w-[200px] h-[45px] rounded-md text-white mx-96 mt-8">
            Добавить фотографии
          </button>
        </div>

     
      </div>
    </div>
  );
};

export default FormaPage;
