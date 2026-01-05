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
use App\Entity\Category;


class CategoryController extends AbstractController {

    #[Route('/category/{id}/cars', name: 'get_category_cars', methods: ['GET'])]
    public function listCarsByCategory(Category $category): Response {
        $cars = $category->getCars(); 
        $data = [
            'category' => $category->getName(),
            'description' => $category->getDescription(),
            'total_cars' => count($cars),
            'cars' => []
        ];
        
        foreach ($cars as $car) {
            $data['cars'][] = [
                'id' => $car->getId(),
                'brand' => $car->getBrand(),
                'model' => $car->getModele(),
                'year' => $car->getYear(),
                'licensePlate' => $car->getLicensePlate(),
                'status' => $car->getStatus(),
                'dailyPrice' => $car->getDailyPrice()
            ];
        }
        
        return $this->json($data);
    }

    #[Route('/category/delete/{c_id}', name: 'delete', methods: ['POST'])]
    public function deleteCategory(EntityManagerInterface $entityManager,int $c_id): Response {

        $category = $entityManager->getRepository(Category::class)->find($c_id);

        if(!$category){
            throw $this->createNotFoundException('No category found for id : '.$c_id);
        }

        $entityManager->remove($category);

        $entityManager->flush();

        return new Response("deleted category with the id : ".$category->getId(), 201);
    }
}
