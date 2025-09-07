import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { fetchTestimonials } from "../redux/testimonialSlice";
import type { RootState, AppDispatch } from "../redux/store";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const dispatch = useDispatch<AppDispatch>();
  const { data: testimonials, status } = useSelector(
    (state: RootState) => state.testimonials
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTestimonials());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading testimonials...</p>;
  if (status === "failed") return <p>Failed to load testimonials.</p>;

  return (
    <div className="flex flex-col items-center justify-center w-full py-12 bg-gray-50">
      <div className="relative flex items-center justify-center w-full overflow-hidden">
        {/* Slides */}
        <div className="hidden md:flex items-center justify-center gap-6">
          {testimonials &&
            testimonials.map((t, index) => {
              const isActive = index === current;
              const isPrev =
                index ===
                (current - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (current + 1) % testimonials.length;

              if (!isActive && !isPrev && !isNext) return null;

              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col justify-center items-center text-center rounded-2xl p-6 bg-white shadow-lg transition cursor-pointer`}
                  animate={{
                    scale: isActive ? 1.1 : 0.9,
                    backgroundColor: isActive ? "#19293A" : "#E2E4E6",
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: isActive ? "400px" : "300px",
                    minHeight: "500px",
                  }}
                  onClick={() => setCurrent(index)}
                >
                  <p
                    className={`${
                      isActive ? "text-white" : "text-gray-800"
                    } italic mb-6 text-xl`}
                  >
                    “{t.quote}”
                  </p>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover mb-3"
                  />
                  <h4
                    className={`font-semibold ${
                      isActive ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {t.name}
                  </h4>
                  <p
                    className={`text-sm ${
                      isActive ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {t.role}
                  </p>
                </motion.div>
              );
            })}
        </div>

        {/* Mobile view: only active */}
        <div className="flex md:hidden items-center justify-center">
          {testimonials && (
            <motion.div
              key={current}
              className="relative flex flex-col justify-center items-center text-center rounded-2xl p-6 shadow-lg"
              animate={{
                scale: 1.05,
                backgroundColor: "#19293A",
              }}
              transition={{ duration: 0.2 }}
              style={{ width: "90%", minHeight: "450px" }}
            >
              <p className="text-white italic mb-6 text-lg">
                “{testimonials[current].quote}”
              </p>
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full object-cover mb-3"
              />
              <h4 className="font-semibold text-white">
                {testimonials[current].name}
              </h4>
              <p className="text-sm text-white">{testimonials[current].role}</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Dots */}
      <div className="flex mt-6 space-x-3">
        {testimonials &&
          testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
      </div>
    </div>
  );
}
