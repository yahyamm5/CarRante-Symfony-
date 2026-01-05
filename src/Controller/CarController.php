<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\CarRepository;
use App\Repository\CategoryRepository;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Car;


final class CarController extends AbstractController {

    #[Route('/car/newCar', name: "create_car", methods: ['POST'])]
    public function CreateCar(
        Request $request, 
        EntityManagerInterface $entityManager, 
        ValidatorInterface $validator,
        CategoryRepository $categoryRepository
    ): Response {
        $data = json_decode($request->getContent(), true);

        $car = new Car(); 
        $car->setBrand($data['brand'] ?? null);
        $car->setModele($data['module'] ?? null); 
        $car->setYear($data['year'] ?? null);
        $car->setLicensePlate($data['licensePlate'] ?? null);
        $car->setDailyPrice($data['dailyPrice'] ?? null);
        $car->setStatus($data['status'] ?? 'Available');
        
        $categoryName = $data['category_name'] ?? null;
        if ($categoryName) {
            $category = $categoryRepository->findOneBy(['name' => $categoryName]);
            if (!$category) {
                return new Response("Category not found", 404);
            }
            $car->setCategory($category);
            $category->addCar($car);
        } else {
            return new Response("category_name is required", 400);
        }
        
        $errors = $validator->validate($car);
        if (count($errors) > 0) {
            return new Response((string) $errors, 400);
        }
        
        $entityManager->persist($car);
        $entityManager->flush();

        return new Response("Saved new car with id: " . $car->getId(), 201);
    }
    
    #[Route("/car/updateCar/{car_id}", name:"car_update", methods:["POST"])]
    public function updateCar(Request $request,EntityManagerInterface $entityManager,int $car_id): Response {

        $car = $entityManager->getRepository(Car::class)->find($car_id);

        if(!$car) {
            throw $this->createNotFoundException('No car found for id : ', $car_id);
            return new Response("No car found for id : ", $car_id. 404);
        }

        $data = json_decode($request->getContent(), true);


        $car->setBrand($data['brand'] ?? null);
        $car->setModele($data['module'] ?? null); 
        $car->setYear($data['year'] ?? null);
        $car->setLicensePlate($data['licensePlate'] ?? null);
        $car->setDailyPrice($data['dailyPrice'] ?? null);
        $car->setStatus($data['status'] ?? $car->getStatus());

        $entityManager->persist($car);
        $entityManager->flush();
        
        return new Response("Updated car with the id : ".$car->getId(), 201);
    }



    #[Route('/car/deleteCar/{car_id}', name : "car_delete", methods: ['POST'])]
    public function delete(EntityManagerInterface $entityManager,int $car_id): Response {

        $car = $entityManager->getRepository(Car::class)->find($car_id);

        if(!$car){
            throw $this->createNotFoundException('No car found for id : '.$car_id);
        }

        $entityManager->remove($car);

        $entityManager->flush();

        return new Response("deleted car with the id : ".$car->getId(), 201);
    }

    #[Route("/car/allCars", name: "car_list", methods: ['GET'])]
    public function display(CarRepository $repository): Response {

        $cars = $repository->findAll();
        $data = [];
        foreach ($cars as $car) {
            $data[] = [
                'id' => $car->getId(),
                'brand' => $car->getBrand(),
                'modele' => $car->getModele(),
                'year' => $car->getYear(),
                'licensePlate' => $car->getLicensePlate(),
                'dailyPrice' => $car->getDailyPrice(),
                'status' => $car->getStatus(),
                'category' => $car->getCategory() ? $car->getCategory()->getName() : null,
        ];
    }

    return $this->json($data);
    }

};
