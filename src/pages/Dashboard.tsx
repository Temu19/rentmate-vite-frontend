function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center bg-white">
        <div className="pl-9 w-full bg-white max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-4 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between pr-4 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col self-start text-sm leading-5">
                    <div className="flex gap-4 justify-between">
                      <div className="grow justify-center px-4 py-2 bg-lime-100 border border-solid shadow-sm border-[color:var(--gray-200,#E5E7EB)] rounded-[100px]">
                        All Catagories
                      </div>
                      <div className="grow justify-center px-4 py-2 bg-white border border-solid shadow-sm border-[color:var(--gray-200,#E5E7EB)] rounded-[100px]">
                        For Rent
                      </div>
                      <div className="grow justify-center px-4 py-2 bg-white border border-solid shadow-sm border-[color:var(--gray-200,#E5E7EB)] rounded-[100px]">
                        For Sale
                      </div>
                    </div>
                    <div className="flex gap-2 justify-between mt-4">
                      <div className="flex gap-2 justify-between px-5 py-2 bg-white border border-solid shadow-sm border-[color:var(--gray-200,#E5E7EB)] rounded-[100px]">
                        <div className="grow">Property Type </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d8b911f022d6d91b401b88ff594334ba5b9270048dea87e965477bfa83ce8a7?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
                          className="w-5 aspect-square"
                        />
                      </div>
                      <div className="flex gap-2 justify-between px-5 py-2 bg-white border border-solid shadow-sm border-[color:var(--gray-200,#E5E7EB)] rounded-[100px]">
                        <div className="grow">Price Range</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d8b911f022d6d91b401b88ff594334ba5b9270048dea87e965477bfa83ce8a7?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
                          className="w-5 aspect-square"
                        />
                      </div>
                    </div>
                    <div className="self-start mt-5 ml-3 text-xs tracking-wide text-black max-md:ml-2.5">
                      1223 Results of Property
                    </div>
                  </div>
                  <div className="flex flex-col text-xs tracking-wide">
                    <div className="flex gap-2 justify-between px-2.5 py-2 bg-white border border-solid shadow-sm border-[color:var(--gray-200,#E5E7EB)] rounded-[100px]">
                      <div className="self-start mt-1">Filters</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6df8c7501532e0a841d90322fe4df2a33ded609d427c2b6846728e7bda15497?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
                        className="w-5 aspect-square"
                      />
                    </div>
                    {/* Gird and lists */}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/104ee9c4d4ecab8449531b42bc0741c0b0dda7d17fd0c4b103e71e19aec0e6e8?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
                      className="self-end mt-16 aspect-[1.96] w-[43px] max-md:mt-10"
                    />
                  </div>
                </div> 
                
                {/* LISTS ARE RENDERED HERE */}
                <div className="px-px mt-2 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center items-start pt-1 pb-2.5 w-full bg-white rounded-2xl max-md:mt-4">
                        <div className="flex flex-col justify-center self-stretch pr-1.5 rounded-xl border border-solid border-[color:var(--gray-200,#E5E7EB)]">
                          <div className="flex overflow-hidden relative flex-col justify-center aspect-[1.36]">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
                              className="object-cover absolute inset-0 size-full"
                            />
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/882d3ae4cd19122acd88034b4f10e4c527d9a96ffa9aaffd33243ab675e10aaa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/882d3ae4cd19122acd88034b4f10e4c527d9a96ffa9aaffd33243ab675e10aaa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/882d3ae4cd19122acd88034b4f10e4c527d9a96ffa9aaffd33243ab675e10aaa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/882d3ae4cd19122acd88034b4f10e4c527d9a96ffa9aaffd33243ab675e10aaa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/882d3ae4cd19122acd88034b4f10e4c527d9a96ffa9aaffd33243ab675e10aaa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/882d3ae4cd19122acd88034b4f10e4c527d9a96ffa9aaffd33243ab675e10aaa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/882d3ae4cd19122acd88034b4f10e4c527d9a96ffa9aaffd33243ab675e10aaa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/882d3ae4cd19122acd88034b4f10e4c527d9a96ffa9aaffd33243ab675e10aaa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
                              className="w-full aspect-[1.37]"
                            />
                          </div>
                        </div>
                        <div className="mt-2 text-xl font-medium leading-8 text-zinc-600">
                          $2050/month
                        </div>
                        <div className="text-sm leading-5 text-zinc-600">
                          5 BED . 4 BATH . 2500 SqFt{" "}
                        </div>
                        <div className="text-base leading-8 whitespace-nowrap text-zinc-600">
                          House in New york for 4 room with
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center items-start pt-1 pb-2.5 w-full bg-white rounded-2xl max-md:mt-4">
                        <div className="flex flex-col justify-center self-stretch pr-1.5 rounded-xl border border-solid border-[color:var(--gray-200,#E5E7EB)]">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0de09fcff33ce267ac50717b1510ffd0f242c847213cbee3bd6865a5c196a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
                            className="w-full aspect-[1.37]"
                          />
                        </div>
                        <div className="mt-2 text-xl font-medium leading-8 text-zinc-600">
                          $2050/month
                        </div>
                        <div className="text-sm leading-5 text-zinc-600">
                          5 BED . 4 BATH . 2500 SqFt{" "}
                        </div>
                        <div className="text-base leading-8 whitespace-nowrap text-zinc-600">
                          House in New york for 4 room with
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center items-start pt-1 pb-2.5 w-full bg-white rounded-2xl max-md:mt-4">
                        <div className="flex flex-col justify-center self-stretch pr-1.5 rounded-xl border border-solid border-[color:var(--gray-200,#E5E7EB)]">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d3dd5b213cec40194358cd12cc59b38971aa80a17473465d2e5cb306c2c2c8dd?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3dd5b213cec40194358cd12cc59b38971aa80a17473465d2e5cb306c2c2c8dd?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3dd5b213cec40194358cd12cc59b38971aa80a17473465d2e5cb306c2c2c8dd?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3dd5b213cec40194358cd12cc59b38971aa80a17473465d2e5cb306c2c2c8dd?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3dd5b213cec40194358cd12cc59b38971aa80a17473465d2e5cb306c2c2c8dd?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3dd5b213cec40194358cd12cc59b38971aa80a17473465d2e5cb306c2c2c8dd?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3dd5b213cec40194358cd12cc59b38971aa80a17473465d2e5cb306c2c2c8dd?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3dd5b213cec40194358cd12cc59b38971aa80a17473465d2e5cb306c2c2c8dd?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
                            className="w-full aspect-[1.37]"
                          />
                        </div>
                        <div className="mt-2 text-xl font-medium leading-8 text-zinc-600">
                          $2050/month
                        </div>
                        <div className="text-sm leading-5 text-zinc-600">
                          5 BED . 4 BATH . 2500 SqFt{" "}
                        </div>
                        <div className="text-base leading-8 whitespace-nowrap text-zinc-600">
                          House in New york for 4 room with
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            {/* MAP */}
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d2c2bd32790a94745107a3df035f6223ec5f7be682a3889427af79801ead944c?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c2bd32790a94745107a3df035f6223ec5f7be682a3889427af79801ead944c?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c2bd32790a94745107a3df035f6223ec5f7be682a3889427af79801ead944c?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c2bd32790a94745107a3df035f6223ec5f7be682a3889427af79801ead944c?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c2bd32790a94745107a3df035f6223ec5f7be682a3889427af79801ead944c?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c2bd32790a94745107a3df035f6223ec5f7be682a3889427af79801ead944c?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c2bd32790a94745107a3df035f6223ec5f7be682a3889427af79801ead944c?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c2bd32790a94745107a3df035f6223ec5f7be682a3889427af79801ead944c?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
                className="grow w-full aspect-[0.84] max-md:mt-5 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
